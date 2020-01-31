import { untilDestroyed } from 'ngx-take-until-destroy';
import { Directive, Input, Host, Optional, Inject, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, EMPTY, merge } from 'rxjs';
import { FormSubmitDirective } from './form-submit.directive';
import { FORM_MSG_ERRORS } from './form-msg-error';

// Referência: https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5
// https://stackblitz.com/edit/netanel-control-er?file=src%2Fapp%2Fapp.component.ts

@Directive({
  selector: '[controlErrors]'
})
export class NgxControlFormErrorDirective {

  @Input('controlErrors') controlErrors:FormGroup = new FormGroup({});
  @Input() fieldName:string;
  @Input() customErrors = {};
  submit$: Observable<Event>;

  constructor(
    @Optional() @Host() private form: FormSubmitDirective,
    @Inject(FORM_MSG_ERRORS) private errors,
    private _elementRef: ElementRef
  ) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
    this._elementRef.nativeElement.textContent = "";
  }

  ngOnInit() {
    this.setError();
    merge(
      this.submit$,
      this.controlErrors.get(this.fieldName).valueChanges
    )
    .pipe(untilDestroyed(this))
    .subscribe((value) => {
      this.setError();
    });
  }

  ngOnDestroy() { }

  setError(){
    const controlErrors = this.controlErrors.get(this.fieldName).errors;
    if (controlErrors) {
      const key = Object.keys(controlErrors).length - 1;
      const firstKey = Object.keys(controlErrors)[key];
      const getError = this.errors[firstKey];
      const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
      this.setElementTextError(text);
    }
  }

  setElementTextError(text: string) {
    this._elementRef.nativeElement.textContent = text;
  }

}
