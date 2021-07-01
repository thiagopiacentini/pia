import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class TooltipComponent {
  constructor() {}

  
  @Input()
  @HostBinding('attr.aria-label')
  ariaLabel: '';

  @Input()
  text = '';
  
  @Input()
  textTooltip = 'informação adicional';

 
}
