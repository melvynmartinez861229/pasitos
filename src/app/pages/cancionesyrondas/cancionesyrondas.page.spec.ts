import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancionesyrondasPage } from './cancionesyrondas.page';

describe('CancionesyrondasPage', () => {
  let component: CancionesyrondasPage;
  let fixture: ComponentFixture<CancionesyrondasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionesyrondasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
