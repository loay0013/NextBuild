import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphicsCardChoicePage } from './graphics-card-choice.page';

describe('GraphicsCardChoicePage', () => {
  let component: GraphicsCardChoicePage;
  let fixture: ComponentFixture<GraphicsCardChoicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GraphicsCardChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
