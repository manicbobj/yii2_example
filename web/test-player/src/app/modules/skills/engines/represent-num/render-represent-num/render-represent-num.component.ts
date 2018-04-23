import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RenderComponentBase} from "../../render-component-base";
import {QuestionResponseClass, QuestionType} from "../../../../../shared/models/question";
import {ImageType} from "../../../../../shared/models/image";
import {Point} from "../../../../../shared/libraries/geom";
import {register} from "../../renderer-registry";

import {AtomGroup, Common} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";

@register
@Component({
  selector: 'app-render-represent-num',
  templateUrl: './render-represent-num.component.html',
  styleUrls: ['./render-represent-num.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderRepresentNumComponent extends RenderComponentBase implements Common{
  groups: AtomGroup[];
  problem: number;
  groupBoxSize = 200;
  atomSize = 50;

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }


  private selectGroupBox(group) {
    this.question.response.value = group.num_atoms;
  }

  prepareRendering(question: QuestionType) {}
}

applyMixins(RenderRepresentNumComponent, [Common]);
