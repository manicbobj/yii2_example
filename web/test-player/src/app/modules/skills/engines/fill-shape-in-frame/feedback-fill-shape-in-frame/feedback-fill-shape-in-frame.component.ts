import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FeedbackComponentBase} from "../../feedback-component-base";
import {register} from "../../feedback-registry";
import {QuestionType} from "../../../../../shared/models/question";
import {Common} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";
import {CardData} from "../../shape-in-frame/common";
import {ImageType} from "../../../../../shared/models/image";

@register
@Component({
  selector: 'app-feedback-fill-shape-in-frame',
  templateUrl: './feedback-fill-shape-in-frame.component.html',
  styleUrls: ['./feedback-fill-shape-in-frame.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackFillShapeInFrameComponent extends FeedbackComponentBase implements OnInit {
  frames: any[];
  cards: CardData[];
  shape: ImageType;
  color: string;
  numShapes: number;
  fillColor: string;

  ngOnInit() {
  }

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);

    // Additional render options.
    this.fillColor = this.question.render_options.fill_color;
  }

  prepareRendering(question: QuestionType) {}

}

applyMixins(FeedbackFillShapeInFrameComponent, [Common]);
