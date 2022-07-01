import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDocsComponent } from './popular-docs.component';

describe('PopularDocsComponent', () => {
  let component: PopularDocsComponent;
  let fixture: ComponentFixture<PopularDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
