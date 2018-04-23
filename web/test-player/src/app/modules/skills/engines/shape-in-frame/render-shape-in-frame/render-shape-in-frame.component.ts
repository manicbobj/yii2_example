import {Component, ComponentFactoryResolver, OnInit, ViewEncapsulation} from '@angular/core';
import {QuestionResponseClass, QuestionType} from "../../../../../shared/models/question";
import {ImageType} from "../../../../../shared/models/image";
import {line} from "d3-shape";
import {register} from "../../renderer-registry";
import {RenderComponentBase} from "../../render-component-base";
import {Common, CardData} from "../common";
import {applyMixins} from "rxjs/util/applyMixins";


@register
@Component({
  selector: 'app-render-shape-in-frame',
  templateUrl: './render-shape-in-frame.component.html',
  styleUrls: ['./render-shape-in-frame.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderShapeInFrameComponent extends RenderComponentBase implements OnInit {

  frames: any[];
  cards: CardData[];
  shape: ImageType;
  color: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { super();}

  ngOnInit() {
  }

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    this.prepareRendering(question);
  }



  private selectCard(index: number) {
    for(let card of this.cards) {
      card.selected = false;
    }

    this.cards[index].selected = true;

    this.question.response.value = this.cards[index].num;
  }

  prepareRendering(question: QuestionType) {}

}

applyMixins(RenderShapeInFrameComponent, [Common]);

