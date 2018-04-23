import {ComponentFactoryResolver, EventEmitter, Input, Output} from "@angular/core";
import {QuestionResponseClass, QuestionType} from "../../../shared/models/question";



export class RenderComponentBase {
  @Output() onSubmit = new EventEmitter<QuestionType>();
  @Input() mode: string;

  constructor() {

  }
  protected question: QuestionType;

  public setQuestion(question: QuestionType) {
    this.question = question;

    this.initResponse(question);
  }

  protected initResponse(question: QuestionType) {
    if(!question.response) {
      question.response = new QuestionResponseClass();
    }
  }

  protected submit() {
    this.onSubmit.emit(this.question);
  }


}
