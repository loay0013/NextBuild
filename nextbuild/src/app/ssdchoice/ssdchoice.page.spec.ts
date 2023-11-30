import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SSDChoicePage } from './ssdchoice.page';

describe('SSDChoicePage', () => {
  let component: SSDChoicePage;
  let fixture: ComponentFixture<SSDChoicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SSDChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
