import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {QuestionResponseClass, QuestionType} from "../../../../../shared/models/question";
import {register} from "../../renderer-registry";
import {RenderComponentBase} from "../../render-component-base";

interface RenderOptions {
  square_colors: string[],
  colors: string[],
  problem: number
}

@register
@Component({
  selector: 'app-render-ordinal-square',
  templateUrl: './render-ordinal-square.component.html',
  styleUrls: ['./render-ordinal-square.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderOrdinalSquareComponent extends RenderComponentBase implements OnInit {

  private renderOptions: RenderOptions;

  private problemOrdianl: string;

  ngOnInit() {
  }

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }

  prepareRendering(question: QuestionType) {
    this.renderOptions = question.render_options;
  }

  selectTile(color: string) {
    this.question.response.value = color;
  }
}
