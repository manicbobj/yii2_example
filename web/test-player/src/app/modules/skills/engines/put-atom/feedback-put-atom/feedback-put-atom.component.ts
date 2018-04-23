import {Component, ComponentFactoryResolver, OnInit, ViewEncapsulation} from '@angular/core';
import {FeedbackComponentBase} from "../../feedback-component-base";
import {register} from "../../feedback-registry";

@register
@Component({
  selector: 'app-feedback-put-atom',
  templateUrl: './feedback-put-atom.component.html',
  styleUrls: ['./feedback-put-atom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackPutAtomComponent extends FeedbackComponentBase implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit() {
  }

}
