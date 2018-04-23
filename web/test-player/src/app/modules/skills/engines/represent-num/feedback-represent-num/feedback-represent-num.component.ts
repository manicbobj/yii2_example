import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {register} from "../../feedback-registry";
import {FeedbackComponentBase} from "../../feedback-component-base";
import {QuestionType} from "../../../../../shared/models/question";
import {AtomGroup, Common} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";

@register
@Component({
  selector: 'app-feedback-represent-num',
  templateUrl: './feedback-represent-num.component.html',
  styleUrls: ['./feedback-represent-num.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackRepresentNumComponent extends FeedbackComponentBase implements Common{
  groups: AtomGroup[];
  problem: number;
  groupBoxSize = 200;
  atomSize = 50;

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }

  prepareRendering(question: QuestionType) {}
}

applyMixins(FeedbackRepresentNumComponent, [Common]);
