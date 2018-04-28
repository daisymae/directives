import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * a directive to do the opposite of *ngIf
 */
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // a setter for the property unless
  // will get called whenever the property changes
  // property name needs to be same as selector
@Input() set appUnless(condition: boolean) {
  if (!condition) {
    this.vcRef.createEmbeddedView(this.templateRef);
  } else {
    this.vcRef.clear();
  }

}
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
