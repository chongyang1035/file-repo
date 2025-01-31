import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdBannerComponent } from '../pages/dynamic-component/ad-banner/ad-banner.component';
import { DynamicComponentComponent } from '../pages/dynamic-component/dynamic-component.component';
import { AdItemComponent } from './components/ad-item/ad-item.component';
import { ContentComponent } from './components/content/content.component';
import { NumberTrackerComponent } from './components/counter/number-tracker.component';
import { CustomFormControlComponent } from './components/custom-form-control/custom-form-control.component';
import { DefaultComponent } from './components/default/default.component';
import { FormComponent } from './components/form/form.component';
import { PushComponent } from './components/push/push.component';
import { StaticSonComponent } from './components/static-son/static-son.component';
import { StaticComponent } from './components/static/static.component';
import { AdDirective } from './directives/ad.directive';
import { CustomDirective } from './directives/custom.directive';
import { HoverDirective } from './directives/hover.directive';
import { NgModelStatusDirective } from './directives/ng-model-status.directive';
import { UnlessDirective } from './directives/unless.directive';
import { UploadDirective } from './directives/upload.directive';
import { NumberPipe } from './pipes/number.pipe';
import { StyleDirectiveDirective } from './style-directive.directive';

@NgModule({
  declarations: [
    DynamicComponentComponent,
    AdDirective,
    AdBannerComponent,
    StaticComponent,
    StaticSonComponent,
    ContentComponent,
    UploadDirective,
    HoverDirective,
    UnlessDirective,
    AdItemComponent,
    FormComponent,
    CustomFormControlComponent,
    DefaultComponent,
    PushComponent,
    NumberTrackerComponent,
    NumberPipe,
    CustomDirective,
    StyleDirectiveDirective,
    NgModelStatusDirective,
    StyleDirectiveDirective,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [
    DynamicComponentComponent,
    AdDirective,
    AdBannerComponent,
    StaticComponent,
    StaticSonComponent,
    ContentComponent,
    UploadDirective,
    HoverDirective,
    UnlessDirective,
    AdItemComponent,
    FormComponent,
    CustomFormControlComponent,
    DefaultComponent,
    PushComponent,
    NumberTrackerComponent,
    NumberPipe,
    CustomDirective,
    NgModelStatusDirective,
    StyleDirectiveDirective,
    StyleDirectiveDirective,
  ],
})
export class SharedModule {}
