import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RenderComponentBase} from "../../render-component-base";
import {register} from "../../renderer-registry";
import {QuestionResponseClass, QuestionType} from "../../../../../shared/models/question";
import {ImageType} from "../../../../../shared/models/image";
import {Common} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";

@register
@Component({
  selector: 'app-render-count-more-or-less',
  templateUrl: './render-count-more-or-less.component.html',
  styleUrls: ['./render-count-more-or-less.component.css', '../common.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderCountMoreOrLessComponent extends RenderComponentBase implements Common{
  atom: ImageType;
  frameSize: number;
  countType: string;
  topAtoms: number;
  topFrame: any[];

  bottomAtoms: number;
  bottomFrame: any[];

  setQuestion(question:QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }

  prepareRendering(question){}
}

applyMixins(RenderCountMoreOrLessComponent, [Common]);