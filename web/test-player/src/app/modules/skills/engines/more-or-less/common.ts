import {QuestionResponseClass, QuestionType} from "../../../../shared/models/question";
import {ImageType} from "../../../../shared/models/image";

export interface RenderOptions {
  atom: ImageType;
  num_atoms: number;
  groups: number[];
  count_type: string;
}

export class Common {
  atom: ImageType;
  numAtoms: number;
  atomIndexer: number[];
  groups: number[][];
  countType: string;

  prepareRendering(question: QuestionType) {
    let renderOptions = question.render_options;

    this.countType = renderOptions.count_type;
    this.numAtoms = renderOptions.num_atoms;
    this.atom = renderOptions.atom;

    this.groups = [];
    for(let group of renderOptions.groups) {
      let arr = [];

      for(let i = 0; i < group; i++) {
        arr.push(i);
      }

      this.groups.push(arr);
    }

    this.atomIndexer = [];
    for(let i = 1; i <= this.numAtoms; i ++) {
      this.atomIndexer.push(i);
    }
  }
}
