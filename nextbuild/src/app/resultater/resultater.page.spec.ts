import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultaterPage } from './resultater.page';

describe('ResultaterPage', () => {
  let component: ResultaterPage;
  let fixture: ComponentFixture<ResultaterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResultaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
