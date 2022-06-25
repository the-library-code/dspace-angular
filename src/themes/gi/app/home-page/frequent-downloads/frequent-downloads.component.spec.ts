import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentDownloadsComponent } from './frequent-downloads.component';

describe('FrequentDownloadsComponent', () => {
  let component: FrequentDownloadsComponent;
  let fixture: ComponentFixture<FrequentDownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentDownloadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
