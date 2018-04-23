import {
  Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {RenderComponentBase} from "../../render-component-base";
import {register} from "../../renderer-registry";
import {QuestionType} from "../../../../../shared/models/question";
import {applyMixins} from "rxjs/util/applyMixins";
import {Common} from "../common";

interface RenderOptions {
  from: number,
  to: number,
  missing: number
}

@register
@Component({
  selector: 'app-render-number-line',
  templateUrl: './render-number-line.component.html',
  styleUrls: ['./render-number-line.component.css', '../common.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderNumberLineComponent extends RenderComponentBase implements OnInit {
  @ViewChild('canvas') _canvas: ElementRef;
  @ViewChild('container') _container: ElementRef;

  numbers: number[] = [];
  from: number = 0;
  to: number = 0;
  missing: number = 0;

  labelWidth: number = 0;
  labelHeight: number = 0;
  labelTop: number = 0;
  canvasWidth: number = 0;
  canvasHeight: number = 0;
  stepSize: number = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private renderer: Renderer2) {
    super();
  }

  ngOnInit() {
  }

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);
    this.prepareRendering(question);
    this._render();
  }

  prepareRendering(question: QuestionType) {
  }

  _render() {
    this.renderer.setAttribute(this._canvas.nativeElement, 'width', `${this.canvasWidth}`);
    this.renderer.setAttribute(this._canvas.nativeElement, 'height', `${this.canvasHeight}`);
    this._drawCanvas(this._canvas, this.canvasWidth, this.canvasHeight, this.numbers.length);
  }

  _drawCanvas(canvas:ElementRef, width: number, height: number, ticks: number) {
  }
}

applyMixins(RenderNumberLineComponent, [Common]);
