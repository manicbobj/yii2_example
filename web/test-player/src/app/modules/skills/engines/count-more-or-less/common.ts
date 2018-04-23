
import {QuestionResponseClass, QuestionType} from "../../../../shared/models/question";
import {ImageType} from "../../../../shared/models/image";

interface RenderOptions {
  atom: ImageType;
  top_atoms: number;
  bottom_atoms: number;
  frame_size: number;
  count_type: string;
}


export class Common {

  atom: ImageType;
  frameSize: number;
  countType: string;
  topAtoms: number;
  topFrame: any[];

  bottomAtoms: number;
  bottomFrame: any[];

  prepareRendering(question: QuestionType) {
    let renderOptions: RenderOptions = question.render_options;
    let rowSize = 5;
    let row = [];

    this.atom = renderOptions.atom;
    this.topAtoms = renderOptions.top_atoms;
    this.bottomAtoms = renderOptions.bottom_atoms;
    this.frameSize = renderOptions.frame_size;
    this.countType = renderOptions.count_type;

    this.topFrame = [];
    for(let i = 0; i < this.frameSize; i++) {
      if(i % rowSize === 0)
      {
        row = [];
        this.topFrame.push(row);
      }

      if(i < this.topAtoms) {
        row.push(true);
      } else {
        row.push(false);
      }
    }

    this.bottomFrame = [];
    for(let i = 0; i < this.frameSize; i++) {
      if(i % rowSize === 0)
      {
        row = [];
        this.bottomFrame.push(row);
      }

      if(i < this.bottomAtoms) {
        row.push(true);
      } else {
        row.push(false);
      }
    }
  }
}