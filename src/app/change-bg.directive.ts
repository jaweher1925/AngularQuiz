import { Directive ,Input , HostListener,ElementRef , Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorect :boolean =false;
  constructor( private el : ElementRef , private render : Renderer2 ) { }
  @HostListener('click') answer(){
    if (this.isCorect){
      this.render.setStyle(this.el.nativeElement, 'background','green');
      this.render.setStyle(this.el.nativeElement, 'color','#fff');
      this.render.setStyle(this.el.nativeElement, 'border','2px solid grey');

    }else {
      this.render.setStyle(this.el.nativeElement, 'background','red');
      this.render.setStyle(this.el.nativeElement, 'color','#fff');
      this.render.setStyle(this.el.nativeElement, 'border','2px solid grey');

    }
  }
}
