import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameChoicePage } from './game-choice.page';

describe('GameChoicePage', () => {
  let component: GameChoicePage;
  let fixture: ComponentFixture<GameChoicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
