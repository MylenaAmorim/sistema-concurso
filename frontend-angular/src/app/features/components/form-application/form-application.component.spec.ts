import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApplicationComponent } from './form-application.component';

describe('FormCandidaturaComponent', () => {
  let component: FormApplicationComponent;
  let fixture: ComponentFixture<FormApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormApplicationComponent]
    });
    fixture = TestBed.createComponent(FormApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
