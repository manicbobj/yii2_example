import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RenderComponentBase} from "../../render-component-base";
import {QuestionResponseClass, QuestionType} from "../../../../../shared/models/question";
import {ImageType} from "../../../../../shared/models/image";
import {register} from "../../renderer-registry";
import {Common} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";



@register
@Component({
  selector: 'app-render-more-or-less',
  templateUrl: './render-more-or-less.component.html',
  styleUrls: ['./render-more-or-less.component.css', '../common.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderMoreOrLessComponent extends RenderComponentBase implements Common{

  atom: ImageType;
  numAtoms: number;
  atomIndexer: number[];
  groups: number[][];
  countType: string;

  setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }

  selectGroup(group) {
    this.question.response.value = group.length;
  }

  prepareRendering(question: QuestionType){}
}

applyMixins(RenderMoreOrLessComponent, [Common]);