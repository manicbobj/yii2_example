import {Component, ComponentFactoryResolver, OnInit, ViewEncapsulation} from '@angular/core';
import {QuestionResponseClass, QuestionType} from "../../../../../shared/models/question";
import {ImageType} from "../../../../../shared/models/image";
import {register} from "../../renderer-registry";
import {RenderComponentBase} from "../../render-component-base";

interface RenderOptions {
  atom: ImageType;
  problem: number;
}

@register
@Component({
  selector: 'app-render-num-atom',
  templateUrl: './render-num-atom.component.html',
  styleUrls: ['./render-num-atom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderNumAtomComponent extends RenderComponentBase implements OnInit {

  atom: ImageType;
  atomIndexer: number[];
  cardIndexer: number[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { super();}

  ngOnInit() {
  }

  public setQuestion(question: QuestionType) {
    let renderOptions:RenderOptions = question.render_options;

    super.setQuestion(question);

    this.atom = renderOptions.atom;
    this.atomIndexer = Array(renderOptions.problem).fill(0);
    this.cardIndexer = Array(question.difficulty).fill(0);
    this.cardIndexer.forEach((val, idx, array) => {
      array[idx] = idx + 1;
    });

  }


  public selectCard(idx: number) {
    this.question.response.value = idx;
  }

}
