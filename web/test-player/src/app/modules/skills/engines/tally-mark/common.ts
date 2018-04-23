import {QuestionType} from "../../../../shared/models/question";
import {ImageType} from "../../../../shared/models/image";

interface RenderOptions {
  problem: number;
  tally_marks: ImageType[]
}

export class TallyImageClass implements ImageType{
  name: string;
  url: string;
  type: string;
  number: number;
}

export class Common {
  tallyMarks: TallyImageClass[];

  prepareRendering(question: QuestionType) {
    let renderOptions: RenderOptions = question.render_options;

    let tallyMark5 = Math.floor(renderOptions.problem / 5);
    let tallyMarkR = renderOptions.problem % 5;

    this.tallyMarks = [];
    for(let i = 0; i < tallyMark5; i ++) {
      if(tallyMarkR != 0) {
        this.tallyMarks.push(<TallyImageClass>renderOptions.tally_marks[1]);
      }
      else {
        this.tallyMarks.push(<TallyImageClass>renderOptions.tally_marks[0]);
      }
    }

    if(tallyMarkR != 0) {
      this.tallyMarks.push(<TallyImageClass>renderOptions.tally_marks[0]);
    }
  }
}