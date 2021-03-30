import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {

  @Input()
  width: string;

  @Input()
  height: string;

  @Input()
  circle: boolean;

  getSkeletonStyle() {
    const skeletonStyles = {
      'width.px': this.width ? this.width : '',
      'height.px': this.height ? this.height : '',
      'border-radius': this.circle ? '50%' : ''
    };
    return skeletonStyles;
  }

}
