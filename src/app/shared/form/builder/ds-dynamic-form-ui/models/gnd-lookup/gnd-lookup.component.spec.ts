import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GndLookupComponent } from './gnd-lookup.component';

describe('GndLookupComponent', () => {
  let component: GndLookupComponent;
  let fixture: ComponentFixture<GndLookupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GndLookupComponent]
    });
    fixture = TestBed.createComponent(GndLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
