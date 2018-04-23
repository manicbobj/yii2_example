import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {register} from "../../renderer-registry";
import {RenderComponentBase} from "../../render-component-base";
import {QuestionType} from "../../../../../shared/models/question";
import {Common} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";

@register
@Component({
  selector: 'app-render-count-up-down',
  templateUrl: './render-count-up-down.component.html',
  styleUrls: ['./render-count-up-down.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderCountUpDownComponent extends RenderComponentBase{

  countType: string;
  number: number;

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }

  public prepareRendering(question: QuestionType) {}
}

applyMixins(RenderCountUpDownComponent, [Common]);