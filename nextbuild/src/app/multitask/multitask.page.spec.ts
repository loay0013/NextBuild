import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultitaskPage } from './multitask.page';

describe('MultitaskPage', () => {
  let component: MultitaskPage;
  let fixture: ComponentFixture<MultitaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MultitaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
