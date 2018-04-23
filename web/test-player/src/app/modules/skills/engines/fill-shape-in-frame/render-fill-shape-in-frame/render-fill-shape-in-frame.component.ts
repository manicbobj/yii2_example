import {Component, ComponentFactoryResolver, OnInit, ViewEncapsulation} from '@angular/core';
import {ImageType} from "../../../../../shared/models/image";
import {QuestionType} from "../../../../../shared/models/question";
import {RenderComponentBase} from "../../render-component-base";
import {Common} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";
import {register} from "../../renderer-registry";



class CardData {
  num: number;
  selected: boolean;
}

@register
@Component({
  selector: 'app-render-fill-shape-in-frame',
  templateUrl: './render-fill-shape-in-frame.component.html',
  styleUrls: ['./render-fill-shape-in-frame.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderFillShapeInFrameComponent extends RenderComponentBase implements OnInit {

  frames: any[];
  cards: CardData[];
  shape: ImageType;
  color: string;
  numShapes: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { super();}

  ngOnInit() {
  }

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }

  prepareRendering(question: QuestionType) {
  }

  private selectCard(index: number) {
    for(let card of this.cards) {
      card.selected = false;
    }

    this.cards[index].selected = true;

    this.question.response.value = this.cards[index].num;
  }

}

applyMixins(RenderFillShapeInFrameComponent, [Common]);