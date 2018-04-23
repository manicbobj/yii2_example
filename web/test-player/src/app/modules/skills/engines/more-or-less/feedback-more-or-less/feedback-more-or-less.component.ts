import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {applyMixins} from "rxjs/util/applyMixins";
import {register} from "../../feedback-registry";
import {FeedbackComponentBase} from "../../feedback-component-base";
import {Common} from "../common";
import {ImageType} from "../../../../../shared/models/image";
import {QuestionType} from "../../../../../shared/models/question";


@register
@Component({
  selector: 'app-feedback-more-or-less',
  templateUrl: './feedback-more-or-less.component.html',
  styleUrls: ['./feedback-more-or-less.component.css', '../common.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackMoreOrLessComponent extends FeedbackComponentBase implements Common{
  atom: ImageType;
  numAtoms: number;
  atomIndexer: number[];

  answer: number;
  answerIndexer: number[];

  guideIndexer: number[];

  groups: number[][];
  countType: string;

  setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
    this.prepareFeedback(question);
  }

  prepareRendering(question: QuestionType){}
  prepareFeedback(question: QuestionType) {
    this.answer = question.validation.valid_response.value;
    this.answerIndexer = [];

    for(let i = 1; i <= this.answer; i++) {
      this.answerIndexer.push(i);
    }

    let guideMax = Math.max(this.answer, this.numAtoms);

    this.guideIndexer = [];
    for(let i = 1; i <= guideMax; i++) {
      this.guideIndexer.push(i);
    }
  }

}

applyMixins(FeedbackMoreOrLessComponent, [Common]);