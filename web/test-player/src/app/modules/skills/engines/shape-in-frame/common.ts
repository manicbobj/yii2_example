import {QuestionResponseClass, QuestionType} from "../../../../shared/models/question";
import {ImageType} from "../../../../shared/models/image";
import {Point} from "../../../../shared/libraries/geom";

interface RenderOptions {
  shape: ImageType,
  fill: boolean[],
  color: string,
  problem: number
}

const _calculateFrames = (fill) => {
  let totalFrames = fill.length / 10;

  let frames = [];

  let badgeNum = 0;

  for(let i = 0; i < totalFrames; i++) {
    let frame = [];
    let numCellFrame = 10, numCellRow = 5, numRowFrame = Math.round(numCellFrame / numCellRow);
    let startIdx = i * numCellFrame;

    for(let rowIdx = 0; rowIdx < numRowFrame; rowIdx ++) {
      let row = [];

      for(let cellIdx = 0; cellIdx < numCellRow; cellIdx ++) {
        let linearCellIdx = startIdx + rowIdx * numCellRow + cellIdx;
        let cellFill = fill[linearCellIdx];

        if (fill[linearCellIdx]) {
          badgeNum++;
        }

        row.push({
          fill: cellFill,
          badge: badgeNum
        });
      }

      frame.push(row);
    }

    frames.push(frame);
  }

  return frames;
};

const _fillBadgeNum = (fill) => {
  let result = [];
  let num = 0;

  for(let i = 0; i < fill.length; i++) {
    if(fill[i]) {
      num ++;
      result.push(num);
    } else {
      result.push(0);
    }
  }

  return result;
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

export class CardData {
  num: number;
  selected: boolean;
}

export class Common {
  frames: any[];
  cards: CardData[];
  shape: ImageType;
  color: string;

  prepareRendering(question: QuestionType) {
    let renderOptions:RenderOptions = question.render_options;

    this.frames = _calculateFrames(renderOptions.fill);

    this.cards = _generateCards(question.difficulty);

    this.shape = renderOptions.shape;

    this.color = renderOptions.color;

  }
}
