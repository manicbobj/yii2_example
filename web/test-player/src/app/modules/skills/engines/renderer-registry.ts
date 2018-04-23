import {ComponentFactoryResolver} from "@angular/core";
import {RenderComponentBase} from "./render-component-base";


type ComponentClass = { new (...args: any[]): RenderComponentBase };

const REGISTRY = new Map<string, ComponentClass>();

export function getRenderClass(name: string): ComponentClass {
  return REGISTRY.get(name);
}

export function register(cls: ComponentClass): void {
  REGISTRY.set(cls.name, cls);
}
