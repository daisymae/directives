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
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
