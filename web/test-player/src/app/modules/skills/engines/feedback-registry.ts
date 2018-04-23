import {ComponentFactoryResolver} from "@angular/core";
import {FeedbackComponentBase} from "./feedback-component-base";


type ComponentClass = { new (...args: any[]): FeedbackComponentBase };

const REGISTRY = new Map<string, ComponentClass>();

export function getFeedbackClass(name: string): ComponentClass {
  return REGISTRY.get(name);
}

export function register(cls: ComponentClass): void {
  REGISTRY.set(cls.name, cls);
}
