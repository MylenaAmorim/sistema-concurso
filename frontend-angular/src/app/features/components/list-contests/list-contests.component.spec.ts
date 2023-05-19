import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContestsComponent } from './list-contests.component';

describe('ListContestsComponent', () => {
  let component: ListContestsComponent;
  let fixture: ComponentFixture<ListContestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListContestsComponent]
    });
    fixture = TestBed.createComponent(ListContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
