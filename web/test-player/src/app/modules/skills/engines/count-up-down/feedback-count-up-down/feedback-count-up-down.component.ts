import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {register} from "../../feedback-registry";
import {FeedbackComponentBase} from "../../feedback-component-base";
import {QuestionType} from "../../../../../shared/models/question";
import {applyMixins} from "rxjs/util/applyMixins";
import {Common} from "../common";

@register
@Component({
  selector: 'app-feedback-count-up-down',
  templateUrl: './feedback-count-up-down.component.html',
  styleUrls: ['./feedback-count-up-down.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackCountUpDownComponent extends FeedbackComponentBase{
  countType: string;
  number: number;
  guideNumbers: number[];


  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
    this.prepareFeedback(question);
  }

  public prepareRendering(question: QuestionType) {}

  public prepareFeedback(question: QuestionType) {
    let from: number, to: number;
    if(this.number > 2) {
      from = this.number - 2;
      to = this.number + 2;
    }

    this.guideNumbers = [];

    for(let i = from; i <= to; i ++) {
      this.guideNumbers.push(i);
    }
  }
}

applyMixins(FeedbackCountUpDownComponent, [Common]);