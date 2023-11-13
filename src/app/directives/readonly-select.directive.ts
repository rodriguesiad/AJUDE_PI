import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[readonlySelect]'
})
export class ReadonlySelectDirective {
  @Input() set readonly(value: boolean) {
    this.elementRef.nativeElement.disabled = value;
  }

  constructor(private elementRef: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMousedown(event: Event) {
    if (this.elementRef.nativeElement.disabled) {
      event.preventDefault();
    }
  }
}
