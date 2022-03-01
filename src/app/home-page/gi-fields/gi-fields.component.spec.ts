import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiFieldsComponent } from './gi-fields.component';

describe('GiFieldsComponent', () => {
  let component: GiFieldsComponent;
  let fixture: ComponentFixture<GiFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
