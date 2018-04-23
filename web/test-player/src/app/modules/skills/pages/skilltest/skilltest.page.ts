import {
  Component, ComponentFactoryResolver, EventEmitter, OnDestroy, OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

import {RestAPIService} from "../../../../shared/service/RestAPI/restapi.service";
import {TestSession} from "../../../../shared/models/test-session";
import {QuestionType} from "../../../../shared/models/question";

import {RenderPlaceholderDirective} from "../../directives/render-placeholder/render-placeholder.directive";

import {ComponentContainerDirective} from "../../directives/component-container/component-container.directive";
import {FeedbackComponentBase} from "../../engines/feedback-component-base";
import {getFeedbackClass} from "../../engines/feedback-registry";
import {RenderComponentBase} from "../../engines/render-component-base";
import {getRenderClass} from "../../engines/renderer-registry";



@Component({
  selector: 'app-skilltest',
  templateUrl: './skilltest.page.html',
  styleUrls: ['./skilltest.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillTestPage implements OnInit, OnDestroy {

  // Subscriptions

  private routeSub: any;
  private timerSub: any;

  private test_id: string;
  private session: TestSession;

  private activeQuestion: QuestionType;
  private activeIndex: number;
  private elapsedTime: number;

  @ViewChild(ComponentContainerDirective) containerViewRef: ComponentContainerDirective;

  constructor(private webservice: RestAPIService,
              private router: Router,
              private route: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) {

    this.elapsedTime = 0;

  }

  ngOnInit() {
    const clock = Observable.interval(1000);
    this.routeSub = this.route.params.mergeMap(params => {

      if(params['test_id']) {
        this.test_id = params['test_id'];

        return this.webservice.createTestSession(this.test_id);
      }
    }).subscribe((json) => {
      if(json.success) {
        this.session = json.data;
        this.activeIndex = -1;

        this.timerSub = clock.subscribe(val => {
          this.elapsedTime = Math.floor(new Date().getTime() / 1000 - this.session.start_at);
        });

        this.nextQuestion(this.session);
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.timerSub.unsubscribe();
  }

  nextQuestion(session) {
    this.activeIndex ++;

    if(session.open_question === session.num_questions) {
      this.router.navigateByUrl('/skills/evaluation/' + session._id);
    }

    this.webservice.nextQuestion(session._id)
        .subscribe((json) => {
          if(json.success) {
            this.setActiveQuestion(json.data['question']);
            this.session = json.data['session'];
          }
        });
  }

  setActiveQuestion(question: QuestionType) {
    this.activeQuestion = question;
    this.loadRenderer(question);
  }

  loadRenderer(question: QuestionType) {
    console.log(question);

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        getRenderClass(question.template.render_engine + 'Component')
    );
    let viewContainerRef = this.containerViewRef.viewContainerRef;

    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    let engine = (<RenderComponentBase>componentRef.instance);

    engine.setQuestion(question);
    engine.mode = 'test';

    engine.onSubmit.subscribe(
        (question) => {
          console.log("submit");
          this.submitQuestion(question);
        }
    );
  }

  loadFeedback(question: QuestionType) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        getFeedbackClass(question.template.feedback_engine + 'Component')
    );
    let viewContainerRef = this.containerViewRef.viewContainerRef;

    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    let engine = (<FeedbackComponentBase>componentRef.instance);

    engine.setQuestion(question);

    engine.onSubmit.subscribe(
        (question) => {
          this.nextQuestion(this.session);
        }
    );
  }


  submitQuestion(question: QuestionType) {
    console.log(question);
    this.webservice.submitAnswer(this.session._id, this.activeIndex, question.response)
        .subscribe((json) => {
          if(json.success) {
            let question = <QuestionType> json.data.question;

            // Update session
            this.session = json.data.session;

            if(question.result.score == 0) {
              this.loadFeedback(question);
            }
            else {
              this.nextQuestion(this.session);
            }
          }
        })

  }
}
