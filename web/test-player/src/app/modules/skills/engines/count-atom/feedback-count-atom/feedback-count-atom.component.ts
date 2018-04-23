import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {QuestionType} from "../../../../../shared/models/question";

import {RenderPlaceholderDirective} from "../../../directives/render-placeholder/render-placeholder.directive";
import {register} from "../../feedback-registry";
import {FeedbackComponentBase} from "../../feedback-component-base";

@register
@Component({
  selector: 'app-feedback-count-atom',
  templateUrl: './feedback-count-atom.component.html',
  styleUrls: ['./feedback-count-atom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackCountAtomComponent extends FeedbackComponentBase implements OnInit {

  atomIndexer: number[];
  renderOptions: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { super(); }

  ngOnInit() {
  }

  public setQuestion(question: QuestionType) {

    super.setQuestion(question);

    this.prepareRendering(question);
  }

  public prepareRendering(question: QuestionType) {
    this.renderOptions = question.render_options;

    this.atomIndexer = new Array(this.renderOptions.problem).fill(0);
    this.atomIndexer.forEach((val, idx, array) => {
      array[idx] = idx + 1;
    });
  }
}
