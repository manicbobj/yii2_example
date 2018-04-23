import {ComponentFactoryResolver, EventEmitter, Output} from "@angular/core";
import {QuestionType} from "../../../shared/models/question";



export class FeedbackComponentBase {
  @Output() onSubmit = new EventEmitter<QuestionType>();

  constructor() {

  }
  protected question: QuestionType;

  public setQuestion(question: QuestionType) {
    this.question = question;
  }

  protected submit() {
    this.onSubmit.emit(this.question);
  }
}
