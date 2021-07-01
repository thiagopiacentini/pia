import { TooltipDirective } from './tooltip/tooltip.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipComponent  } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    TooltipDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TooltipComponent],
})
export class AppModule { }
