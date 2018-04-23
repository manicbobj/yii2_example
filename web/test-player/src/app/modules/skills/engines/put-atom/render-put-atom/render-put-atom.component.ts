import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {QuestionResponseClass, QuestionType} from "../../../../../shared/models/question";
import {ImageType} from "../../../../../shared/models/image";
import {Point, Rect} from "../../../../../shared/libraries/geom";

import * as $ from 'jquery';
import Draggabilly from 'draggabilly';
import {propertyNames} from "@angular/language-service/src/html_info";
import {register} from "../../renderer-registry";
import {RenderComponentBase} from "../../render-component-base";


class RenderOptions {
  atom: ImageType;
  background: ImageType;
  atom_num: number;
}

class PutAtomResponse extends QuestionResponseClass{
  atom_positions?: {x: number, y: number}[];

  constructor() {
    super();

    this.atom_positions = [];
  }
}

class AtomDragDropPane {
  element: any;
  question: QuestionType;
  _isDraggable: boolean;
  draggables: any[];

  constructor(element: any) {
    this.element = element;
  }

  setupView() {
    let renderOptions: RenderOptions = this.question.render_options;
    let response: PutAtomResponse = <PutAtomResponse>this.question.response;

    let draggableZone;
    let atomZone;
    let stickerRow;

    this.element.innerHTML = `<div class="draggable-wrapper" data-id="draggable_zone">
        <img class="background bottom-border" src="${renderOptions.background.url}">
        <div class="sticker-wrapper" data-id="atom_zone"></div>
      </div>`;
    this.draggables = [];

    draggableZone = $(this.element).children('[data-id="draggable_zone"]');
    atomZone = draggableZone.children('[data-id="atom_zone"]');

    for(let i = 0; i < renderOptions.atom_num; i ++) {

      if(i % 6 == 0) {
        let stickerInRow = Math.min(renderOptions.atom_num - i, 6);

        stickerRow = $(`<div class="sticker-row"></div>`)
            .css('padding-left', (6 - stickerInRow) * 104 / 2);

        atomZone.append(stickerRow);
      }

      let sticker = $(`<img src="${renderOptions.atom.url}">`)
          .css('left', response.atom_positions[i].x)
          .css('top', response.atom_positions[i].y);

      stickerRow.append($(`<div class="sticker-box"></div>`).append(sticker));

      /*
        Setup draggable
       */
      let draggable = new Draggabilly(
          <Element>sticker[0],
          {
            containment: <Element>draggableZone[0]
          }
      );

      this.draggables.push(draggable);

      if(!this._isDraggable)
        draggable.disable();

      draggable.on('dragMove', (event, pointer) => {
        let pageX = pointer.pageX;
        let pageY = pointer.pageY;
        let position = atomZone.offset();
        let width = atomZone.width();
        let height = atomZone.height();

        let rect = new Rect(position.left, position.top, width, height);
        let point = new Point(pageX, pageY);

        if(rect.pointInRect(point)) {

          sticker.removeClass();
          sticker.addClass('in-move');

        } else {

          sticker.removeClass();
          sticker.addClass('on-landscape');

        }
      });

      draggable.on('dragEnd', (event, pointer) => {
        let movePoint = new Point(pointer.pageX, pointer.pageY);
        let atomZoneRect = this.elementRect(atomZone);
        let stickerRect = this.elementRect(sticker);
        let atomPosition;

        if(atomZoneRect.pointInRect(movePoint)) {
          sticker.animate(
              {
                left: 0,
                top: 0
              },
              100,
              () => {
                sticker.removeClass();
              });

          atomPosition = {x: 0, y: 0};
        } else {
          let left = parseInt(sticker.css('left'));
          let top = parseInt(sticker.css('top'));

          if(atomZoneRect.top < stickerRect.bottom) {
            top += (atomZoneRect.top - stickerRect.bottom);

            sticker.animate({
              top: top
            }, 100);
          }

          atomPosition = {x: left, y: top};
        }

        this.saveAtomPosition(i, atomPosition);
      })
    }
  }

  elementRect(obj): Rect {
    let rect: Rect;
    let offset = $(obj).offset();
    let width = $(obj).width();
    let height = $(obj).height();

    return new Rect(offset.left, offset.top, width, height);
  }

  setQuestion(question: QuestionType) {
    this.question = question;

    this.setupView();
  }

  set isDraggable(isDraggable: boolean) {
    this._isDraggable = isDraggable;

    for(let draggable of this.draggables) {
      if(isDraggable)
        draggable.enable();
      else
        draggable.disable();
    }
  }

  private saveAtomPosition(index, atomPosition) {
    let response: PutAtomResponse = <PutAtomResponse>this.question.response;

    response.atom_positions[index] = atomPosition;
    response.value = 0;

    for(let position of response.atom_positions) {
      if(position.x != 0 && position.y != 0) {
        response.value ++;
      }
    }

    this.question.response = response;
  }

  destroy() {
    this.element.innerHTML = "";
  }
}

@register
@Component({
  selector: 'app-render-put-atom',
  templateUrl: './render-put-atom.component.html',
  styleUrls: ['./render-put-atom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RenderPutAtomComponent extends RenderComponentBase implements OnDestroy {

  @ViewChild('imagePane') imagePane: ElementRef;

  pane: AtomDragDropPane;

  constructor() { super()}

  ngOnDestroy() {
    this.pane.destroy();
  }

  setQuestion(question: QuestionType) {
    super.setQuestion(question);

    let element = this.imagePane.nativeElement;

    // Initialize image pane and append javascript event
    this.pane = new AtomDragDropPane(element);
    this.pane.setQuestion(question);
    this.pane.isDraggable = this.mode != 'static';
  }

  initResponse(question: QuestionType) {
    if(!question.response) {
      question.response = new PutAtomResponse();
    }

    let atom_num: number = question.render_options.atom_num;
    let response: PutAtomResponse = <PutAtomResponse>question.response;

    for(let i = 0; i < atom_num; i ++) {
      if(i >= response.atom_positions.length) {
        response.atom_positions.push({
          x: 0, y: 0
        });
      }
    }
  }

  getAtomName() {
    let atom = this.question.render_options.atom;

    if(this.question.render_options.problem > 1) {
      if(atom.plural)
        return atom.plural;
      else
        return atom.name + 's';
    } else {
      return atom.name;
    }
  }
}
