import {ComponentFactoryResolver, Directive, EventEmitter, Input, Output, ViewContainerRef} from '@angular/core';
import {QuestionType} from "../../../../shared/models/question";
import {getRenderClass} from "../../engines/renderer-registry";
import {RenderComponentBase} from "../../engines/render-component-base";

@Directive({
  selector: '[render-placeholder]'
})
export class RenderPlaceholderDirective{

  private _question: QuestionType;
  private _mode: string;
  private engine: any;

  @Input('mode') set mode(value: string) {
    this._mode = value;

    if(this.engine) {
      this.engine.mode = value;
    }
  }

  @Input('question') set question(value: QuestionType) {

    this._question = value;

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        getRenderClass(this._question.template.render_engine + 'Component')
    );
    let viewContainerRef = this.viewContainerRef;

    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    this.engine = (<RenderComponentBase>componentRef.instance);

    this.engine.mode = this._mode;
    this.engine.setQuestion(this._question);
    this.engine.onSubmit.subscribe((question) => {
      this.onSubmit.emit(question);
    });

  }

  @Output() onSubmit: EventEmitter<QuestionType> = new EventEmitter<QuestionType>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) { }
}
