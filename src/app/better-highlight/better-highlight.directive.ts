import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // custom property binding
  @Input() defaultBackgroundColor = 'transparent';
  // option: can set alias
  @Input('appBetterHighlight') highlightColor = 'blue';
  @Input() defaultColor = 'black';
  @Input() hoverColor = 'white';
  @Input() afterVisitColor = 'purple';

  // input is the property we want to bind to
  // alternative to using Renderer2
  // can bind to any property of element sitting on
  @HostBinding('style.backgroundColor') backgroundColor;
  @HostBinding('style.color') color;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
    // better to use the renderer; need to access the nativeElement
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = this.highlightColor;
    this.color = this.hoverColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultBackgroundColor;
    // simulate a link visited by changing the color after a hover
    this.color = this.afterVisitColor;
  }
}
