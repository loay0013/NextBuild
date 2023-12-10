import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameselectPage } from './gameselect.page';

describe('GameselectPage', () => {
  let component: GameselectPage;
  let fixture: ComponentFixture<GameselectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameselectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
