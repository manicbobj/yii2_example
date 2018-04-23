import {
  Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output,
  ViewEncapsulation
} from '@angular/core';

import {QuestionType, QuestionResponseClass} from "../../../../../shared/models/question";
import {ImageType} from "../../../../../shared/models/image";
import {RenderComponentBase} from "../../render-component-base";
import {register} from "../../renderer-registry";

interface RenderOptions {
  atom: ImageType;
  problem: number
}

@register
@Component({
  selector: 'app-render-count-atom',
  templateUrl: './render-count-atom.component.html',
  styleUrls: ['./render-count-atom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderCountAtomComponent extends RenderComponentBase implements OnInit {

  atom: ImageType;
  atomIndexer: number[];
  cardIndexer: number[];
  atomIndex: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { super();}

  ngOnInit() {
  }

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);

    let renderOptions: RenderOptions = question.render_options;

    this.atom = renderOptions.atom;
    this.atomIndex = 1;
    this.atomIndexer = new Array(renderOptions.problem).fill(0);
    this.cardIndexer = Array(question.difficulty).fill(0);
    this.cardIndexer.forEach((val, idx, array) => {
      array[idx] = idx + 1;
    });

  }

  public selectCard(idx: number) {
    this.question.response.value = idx;
  }

  public clickAtom(idx: number) {
    if (this.atomIndexer[idx] == 0) {
      this.atomIndexer[idx] = this.atomIndex;
      this.atomIndex++;
    }
  }
}
