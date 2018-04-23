import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {register} from "../../feedback-registry";
import {FeedbackComponentBase} from "../../feedback-component-base";
import {Common, TallyImageClass} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";
import {QuestionType} from "../../../../../shared/models/question";

@register
@Component({
  selector: 'app-feedback-tally-mark',
  templateUrl: './feedback-tally-mark.component.html',
  styleUrls: ['./feedback-tally-mark.component.css', '../common.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackTallyMarkComponent extends FeedbackComponentBase{
  tallyMarks: TallyImageClass[];
  tallyCumulativeSums: number[];

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
    this.prepareFeedback(question);
  }

  prepareRendering(question: QuestionType) {}
  prepareFeedback(question: QuestionType) {
    let sum = 0;

    this.tallyCumulativeSums = [];
    for(let i = 0; i < this.tallyMarks.length; i ++) {
      sum += this.tallyMarks[i].number;
      this.tallyCumulativeSums.push(sum);
    }

    console.log(this.tallyMarks);
    console.log(this.tallyCumulativeSums);
  }
}

applyMixins(FeedbackTallyMarkComponent, [Common]);