import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiMagazinesComponent } from './gi-magazines.component';

describe('GiMagazinesComponent', () => {
  let component: GiMagazinesComponent;
  let fixture: ComponentFixture<GiMagazinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiMagazinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiMagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
