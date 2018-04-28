import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // input is the property we want to bind to
  // alternative to using Renderer2
  // can bind to any property of element sitting on
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.color') color = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // better to use the renderer; need to access the nativeElement
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = 'blue';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = 'transparent';
    // simulate a link visited by changing the color after a hover
    this.color = 'purple';
  }
}
