import { TooltipComponent } from './tooltip.component';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tooltip]',
})

export class TooltipDirective implements OnInit {

  private overlayRef: OverlayRef;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private _elementRef: ElementRef,
    private overlay: Overlay,
  ) {}
  
  @HostBinding('attr.class')
  tooltipTarget = 'tooltip';
  
  @HostBinding('attr.class')
  tooltipText = 'tooltip-text';
  
  // @Input()
  // @HostBinding('attr.aria-label')
  // ariaLabel = '';

  @Input('tooltip') text = '';
  
  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
    // Create position attached to the elementRef
      .flexibleConnectedTo(this._elementRef)
    // Describe how to connect overlay to the elementRef
    // Means, attach overlay's center bottom point to the
    // top center point of the elementRef.
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }
 
  @HostListener('mouseenter')
  show() {
    // Create tooltip portal
    const tooltipPortal = new ComponentPortal(TooltipComponent);

    // Attach tooltip portal to overlay
    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(tooltipPortal);

    // pass content to tooltip component instance
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }

}
