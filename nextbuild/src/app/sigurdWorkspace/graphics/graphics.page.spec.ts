import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphicsPage } from './graphics.page';

describe('GraphicsPage', () => {
  let component: GraphicsPage;
  let fixture: ComponentFixture<GraphicsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GraphicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
