import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpListInfosComponent } from './help-list-infos.component';

describe('HelpListInfosComponent', () => {
  let component: HelpListInfosComponent;
  let fixture: ComponentFixture<HelpListInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpListInfosComponent]
    });
    fixture = TestBed.createComponent(HelpListInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
