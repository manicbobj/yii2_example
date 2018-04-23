import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RenderComponentBase} from "../../render-component-base";
import {register} from "../../renderer-registry";
import {QuestionType} from "../../../../../shared/models/question";
import {ImageType} from "../../../../../shared/models/image";
import {applyMixins} from "rxjs/util/applyMixins";
import {Common, TallyImageClass} from "../common";


@register
@Component({
  selector: 'app-render-tally-mark',
  templateUrl: './render-tally-mark.component.html',
  styleUrls: ['./render-tally-mark.component.css', '../common.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderTallyMarkComponent extends RenderComponentBase{
  tallyMarks: TallyImageClass[];

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }

  prepareRendering(question: QuestionType) {}
}

applyMixins(RenderTallyMarkComponent, [Common]);