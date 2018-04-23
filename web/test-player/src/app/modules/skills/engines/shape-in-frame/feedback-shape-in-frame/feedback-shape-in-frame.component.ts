import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FeedbackComponentBase} from "../../feedback-component-base";
import {register} from "../../feedback-registry";
import {CardData, Common} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";
import {ImageType} from "../../../../../shared/models/image";
import {QuestionType} from "../../../../../shared/models/question";

@register
@Component({
  selector: 'app-feedback-shape-in-frame',
  templateUrl: './feedback-shape-in-frame.component.html',
  styleUrls: ['./feedback-shape-in-frame.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackShapeInFrameComponent extends FeedbackComponentBase implements OnInit {

  frames: any[];
  cards: CardData[];
  shape: ImageType;
  color: string;

  ngOnInit() {
  }

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }

  prepareRendering(question: QuestionType) {}
}


applyMixins(FeedbackShapeInFrameComponent, [Common]);
