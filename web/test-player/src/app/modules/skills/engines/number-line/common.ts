import {QuestionType} from "../../../../shared/models/question";
import {ElementRef, ViewChild} from "@angular/core";

export interface RenderOptions {
  from: number,
  to: number,
  missing: number
}


export class Common {
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

  prepareRendering(question: QuestionType) {
    let maxWidth = 462;
    let containerWidth = this._container.nativeElement.offsetWidth;
    let renderOptions: RenderOptions = question.render_options;

    for(let i = renderOptions.from; i <= renderOptions.to; i++) {
      this.numbers.push(i);
    }

    this.canvasHeight = 44;
    if(containerWidth > maxWidth) {
      this.canvasWidth = maxWidth;
    } else {
      this.canvasWidth = containerWidth;
    }

    this.labelWidth = this.canvasWidth / (this.numbers.length + 1);
    this.labelHeight = 22;
    this.labelTop = 30;

    this.missing = renderOptions.missing;

  }

  _drawCanvas(canvas:ElementRef, width: number, height: number, ticks: number) {

    let ctx = canvas.nativeElement.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(width, 20);
    ctx.moveTo(0, 20);
    ctx.lineTo(10, 13);
    ctx.moveTo(0, 20);
    ctx.lineTo(10, 27);
    ctx.moveTo(width, 20);
    ctx.lineTo(width - 10, 13);
    ctx.moveTo(width, 20);
    ctx.lineTo(width - 10, 27);

    this.stepSize = width / (ticks + 1);

    for(let i = 0; i < ticks; i++) {
      let x = (i + 1) * this.stepSize;

      ctx.moveTo(x, 15);
      ctx.lineTo(x, 25);
    }

    ctx.stroke();
  }
}