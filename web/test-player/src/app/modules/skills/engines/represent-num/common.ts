import {QuestionResponseClass, QuestionType} from "../../../../shared/models/question";
import {ImageType} from "../../../../shared/models/image";
import {Point} from "../../../../shared/libraries/geom";

export interface AtomGroup {
  atom: ImageType;
  num_atoms: number;
  atom_positions?: Point[];
}

export class Common {
  groups: AtomGroup[];
  problem: number;
  groupBoxSize = 200;
  atomSize = 50;

  prepareRendering(question) {
    let renderOptions = question.render_options;

    // Just need shallow copy
    this.groups = [];

    renderOptions.groups.forEach((group) => {
      let _group:AtomGroup = Object.assign({}, group);
      let numAtoms = group.num_atoms;
      let anchorOffset = -this.atomSize / 2;

      _group.atom_positions = [];

      if(numAtoms == 1) {
        _group.atom_positions.push(
            new Point(this.groupBoxSize / 2 + anchorOffset, this.groupBoxSize / 2 + anchorOffset)
        );
      } else if(numAtoms == 2) {
        _group.atom_positions.push(
            new Point(this.groupBoxSize / 4 + anchorOffset, this.groupBoxSize * 3 / 4 + anchorOffset),
            new Point(this.groupBoxSize * 3 / 4 + anchorOffset, this.groupBoxSize / 4 + anchorOffset),
        );
      } else if(numAtoms == 3) {
        _group.atom_positions.push(
            new Point(this.groupBoxSize * 2 / 4 + anchorOffset, this.groupBoxSize / 4 + anchorOffset),
            new Point(this.groupBoxSize / 4 + anchorOffset, this.groupBoxSize * 3/ 4 + anchorOffset),
            new Point(this.groupBoxSize * 3 / 4 + anchorOffset, this.groupBoxSize * 3 / 4 + anchorOffset)
        );
      } else if(numAtoms == 4) {
        _group.atom_positions.push(
            new Point(this.groupBoxSize / 4 + anchorOffset, this.groupBoxSize / 4 + anchorOffset),
            new Point(this.groupBoxSize / 4 + anchorOffset, this.groupBoxSize * 3/ 4 + anchorOffset),
            new Point(this.groupBoxSize * 3 / 4 + anchorOffset, this.groupBoxSize / 4 + anchorOffset),
            new Point(this.groupBoxSize * 3 / 4 + anchorOffset, this.groupBoxSize * 3/ 4 + anchorOffset),
        );
      } else if(numAtoms == 5) {
        _group.atom_positions.push(
            new Point(this.groupBoxSize / 4 + anchorOffset, this.groupBoxSize / 4 + anchorOffset),
            new Point(this.groupBoxSize / 4 + anchorOffset, this.groupBoxSize * 3/ 4 + anchorOffset),
            new Point(this.groupBoxSize * 2 / 4 + anchorOffset, this.groupBoxSize * 2/ 4 + anchorOffset),
            new Point(this.groupBoxSize * 3 / 4 + anchorOffset, this.groupBoxSize / 4 + anchorOffset),
            new Point(this.groupBoxSize * 3 / 4 + anchorOffset, this.groupBoxSize * 3/ 4 + anchorOffset),
        );
      }

      this.groups.push(_group);
    });

    this.problem = renderOptions.problem;
  }
}
