import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {QuestionType} from "../../../../shared/models/question";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {RestAPIService} from "../../../../shared/service/RestAPI/restapi.service";
import {TestSession} from "../../../../shared/models/test-session";

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class EvaluationPage implements OnInit, OnDestroy {

  routeSub: Subscription;
  session: TestSession;

  constructor(private route: ActivatedRoute,
              private webservice: RestAPIService) { }

  ngOnInit() {
    this.routeSub = this.route.params.mergeMap(params => {

      if(params['session_id']) {
        let session_id = params['session_id'];

        return this.webservice.getTestSession(session_id);
      }
    }).subscribe((json) => {
      this.session = json;
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
