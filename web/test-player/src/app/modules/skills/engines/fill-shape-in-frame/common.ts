import {ImageType} from "../../../../shared/models/image";
import {QuestionType} from "../../../../shared/models/question";

interface RenderOptions {
  shape: ImageType,
  fill: boolean[],
  color: string,
  fill_color: string,
  num_shapes: number
}

const _calculateFrames = (fill) => {
  let totalFrames = fill.length / 10;
  let countNum = 0;
  let frames = [];

  for(let i = 0; i < totalFrames; i++) {
    let frame = [];
    let numCellFrame = 10, numCellRow = 5, numRowFrame = Math.round(numCellFrame / numCellRow);
    let startIdx = i * numCellFrame;

    for(let rowIdx = 0; rowIdx < numRowFrame; rowIdx ++) {
      let row = [];

      for(let cellIdx = 0; cellIdx < numCellRow; cellIdx ++) {
        let linearCellIdx = startIdx + rowIdx * numCellRow + cellIdx;
        let cellFill = fill[linearCellIdx];

        if(!cellFill)
          countNum++;

        row.push({
          fill: cellFill,
          countNum: cellFill ? 0 : countNum
        });
      }

      frame.push(row);
    }

    frames.push(frame);
  }

  return frames;
};

const _generateCards = (difficulty) => {
  const cards: CardData[] = [];

  for(let i = 1; i <= difficulty; i++) {
    let obj = new CardData();

    obj.num = i;
    obj.selected = false;

    cards.push(obj);
  }

  return cards;
};

class CardData {
  num: number;
  selected: boolean;
}

export class Common {
  frames: any[];
  cards: CardData[];
  shape: ImageType;
  color: string;
  numShapes: number;

  prepareRendering(question: QuestionType) {
    let renderOptions:RenderOptions = question.render_options;

    this.frames = _calculateFrames(renderOptions.fill);

    this.cards = _generateCards(question.difficulty);

    this.shape = renderOptions.shape;

    this.color = renderOptions.color;

    this.numShapes = renderOptions.num_shapes;
  }
}