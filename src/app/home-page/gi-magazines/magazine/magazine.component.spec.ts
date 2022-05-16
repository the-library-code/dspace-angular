import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinesComponent } from './magazine.component';

describe('MagazinesComponent', () => {
  let component: MagazinesComponent;
  let fixture: ComponentFixture<MagazinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
