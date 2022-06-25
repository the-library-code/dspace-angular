import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiLanguageSwitcherComponent } from './gi-language-switcher.component';

describe('GiLanguageSwitcherComponent', () => {
  let component: GiLanguageSwitcherComponent;
  let fixture: ComponentFixture<GiLanguageSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiLanguageSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiLanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
