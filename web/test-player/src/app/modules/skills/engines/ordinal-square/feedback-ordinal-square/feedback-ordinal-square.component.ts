import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {QuestionType} from "../../../../../shared/models/question";
import {register} from "../../feedback-registry";
import {FeedbackComponentBase} from "../../feedback-component-base";

interface RenderOptions {
  square_colors: string[],
  colors: string[],
  problem: string
}

@register
@Component({
  selector: 'app-feedback-ordinal-square',
  templateUrl: './feedback-ordinal-square.component.html',
  styleUrls: ['./feedback-ordinal-square.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackOrdinalSquareComponent extends FeedbackComponentBase implements OnInit {

  private renderOptions: RenderOptions;
  ngOnInit() {
  }

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }

  prepareRendering(question: QuestionType) {
    this.renderOptions = question.render_options;
  }
}
