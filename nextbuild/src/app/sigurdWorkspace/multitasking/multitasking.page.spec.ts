import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultitaskingPage } from './multitasking.page';

describe('MultitaskingPage', () => {
  let component: MultitaskingPage;
  let fixture: ComponentFixture<MultitaskingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultitaskingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
