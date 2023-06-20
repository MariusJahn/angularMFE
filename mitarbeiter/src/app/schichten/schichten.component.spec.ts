import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchichtenComponent } from './schichten.component';

describe('SchichtenComponent', () => {
  let component: SchichtenComponent;
  let fixture: ComponentFixture<SchichtenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchichtenComponent]
    });
    fixture = TestBed.createComponent(SchichtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
