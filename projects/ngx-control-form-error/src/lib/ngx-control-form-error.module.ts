import { NgModule } from '@angular/core';
import { NgxControlFormErrorDirective } from './ngx-control-form-error.directive';
import { FormSubmitDirective } from './form-submit.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    NgxControlFormErrorDirective,
    FormSubmitDirective
  ],
  exports: [NgxControlFormErrorDirective]
})
export class NgxControlFormErrorModule { }
