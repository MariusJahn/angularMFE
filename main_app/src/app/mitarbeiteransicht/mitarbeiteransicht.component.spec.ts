import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiteransichtComponent } from './mitarbeiteransicht.component';

describe('MitarbeiteransichtComponent', () => {
  let component: MitarbeiteransichtComponent;
  let fixture: ComponentFixture<MitarbeiteransichtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MitarbeiteransichtComponent]
    });
    fixture = TestBed.createComponent(MitarbeiteransichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
