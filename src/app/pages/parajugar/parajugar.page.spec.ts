import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParajugarPage } from './parajugar.page';

describe('ParajugarPage', () => {
  let component: ParajugarPage;
  let fixture: ComponentFixture<ParajugarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParajugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
