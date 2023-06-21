import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitszeitenComponent } from './arbeitszeiten.component';

describe('ArbeitszeitenComponent', () => {
  let component: ArbeitszeitenComponent;
  let fixture: ComponentFixture<ArbeitszeitenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbeitszeitenComponent]
    });
    fixture = TestBed.createComponent(ArbeitszeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
