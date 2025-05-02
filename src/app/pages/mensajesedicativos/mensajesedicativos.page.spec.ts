import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesedicativosPage } from './mensajesedicativos.page';

describe('MensajesedicativosPage', () => {
  let component: MensajesedicativosPage;
  let fixture: ComponentFixture<MensajesedicativosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesedicativosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
