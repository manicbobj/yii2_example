import {
  Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {register} from "../../feedback-registry";
import {FeedbackComponentBase} from "../../feedback-component-base";
import {applyMixins} from "rxjs/util/applyMixins";
import {Common} from "../common";
import {QuestionType} from "../../../../../shared/models/question";

@register
@Component({
  selector: 'app-feedback-number-line',
  templateUrl: './feedback-number-line.component.html',
  styleUrls: ['./feedback-number-line.component.css', '../common.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackNumberLineComponent extends FeedbackComponentBase {
  @ViewChild('container') _container: ElementRef;
  @ViewChild('reviewCanvas') _reviewCanvas: ElementRef;
  @ViewChild('solveCanvas') _solveCanvas: ElementRef;

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

  public setQuestion(question: QuestionType) {
    super.setQuestion(question);
    this.prepareRendering(question);
    this._render();
  }

  prepareRendering(question: QuestionType) {
  }

  _render() {
    this.renderer.setAttribute(this._reviewCanvas.nativeElement, 'width', `${this.canvasWidth}px`);
    this.renderer.setAttribute(this._reviewCanvas.nativeElement, 'height', `${this.canvasHeight}px`);

    this.renderer.setAttribute(this._solveCanvas.nativeElement, 'width', `${this.canvasWidth}px`);
    this.renderer.setAttribute(this._solveCanvas.nativeElement, 'height', `${this.canvasHeight}px`);

    this._drawCanvas(this._reviewCanvas, this.canvasWidth, this.canvasHeight, this.numbers.length);
    this._drawCanvas(this._solveCanvas, this.canvasWidth, this.canvasHeight, this.numbers.length);
  }

  _drawCanvas(canvas:ElementRef, width: number, height: number, ticks: number) {
  }
}

applyMixins(FeedbackNumberLineComponent, [Common]);