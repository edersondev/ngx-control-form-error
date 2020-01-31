import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxControlFormErrorComponent } from './ngx-control-form-error.component';

describe('NgxControlFormErrorComponent', () => {
  let component: NgxControlFormErrorComponent;
  let fixture: ComponentFixture<NgxControlFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxControlFormErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxControlFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
