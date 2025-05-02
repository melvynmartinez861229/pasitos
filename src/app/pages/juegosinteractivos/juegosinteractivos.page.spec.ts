import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosinteractivosPage } from './juegosinteractivos.page';

describe('JuegosinteractivosPage', () => {
  let component: JuegosinteractivosPage;
  let fixture: ComponentFixture<JuegosinteractivosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosinteractivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
