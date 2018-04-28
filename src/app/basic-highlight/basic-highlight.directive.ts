import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // camelCase directives
  // [] makes it available as an attribute directive
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  // inject the element
  // using private will also automatically assign the value
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // not good practice to directly access;
    // there are cases where there is not a DOM
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
