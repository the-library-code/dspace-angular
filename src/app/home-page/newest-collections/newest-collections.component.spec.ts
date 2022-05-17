import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestCollectionsComponent } from './newest-collections.component';

describe('NewestCollectionsComponent', () => {
  let component: NewestCollectionsComponent;
  let fixture: ComponentFixture<NewestCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestCollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
