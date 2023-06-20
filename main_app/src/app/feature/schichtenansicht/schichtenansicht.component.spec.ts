import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchichtenansichtComponent } from './schichtenansicht.component';

describe('SchichtenansichtComponent', () => {
  let component: SchichtenansichtComponent;
  let fixture: ComponentFixture<SchichtenansichtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchichtenansichtComponent]
    });
    fixture = TestBed.createComponent(SchichtenansichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
