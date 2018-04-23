import {QuestionType} from "../../../../shared/models/question";

interface RenderOptions {
  count_type: string;
  number: number;
}

export class Common {
  countType: string;
  number: number;

  prepareRendering(question: QuestionType) {
    let renderOptions: RenderOptions = question.render_options;
    this.countType = renderOptions.count_type;
    this.number = renderOptions.number;
  }
}
