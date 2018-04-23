import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {register} from "../../feedback-registry";
import {FeedbackComponentBase} from "../../feedback-component-base";
import {Common} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";
import {QuestionType} from "../../../../../shared/models/question";
import {ImageType} from "../../../../../shared/models/image";

@register
@Component({
  selector: 'app-feedback-count-more-or-less',
  templateUrl: './feedback-count-more-or-less.component.html',
  styleUrls: ['./feedback-count-more-or-less.component.css', '../common.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackCountMoreOrLessComponent extends FeedbackComponentBase implements Common{
  atom: ImageType;
  frameSize: number;
  countType: string;
  topAtoms: number;
  topFrame: any[];

  bottomAtoms: number;
  bottomFrame: any[];

  setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }
  prepareRendering(question){}
}

applyMixins(FeedbackCountMoreOrLessComponent, [Common]);