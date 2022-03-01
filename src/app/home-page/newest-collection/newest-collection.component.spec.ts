import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestCollectionComponent } from './newest-collection.component';

describe('NewestCollectionComponent', () => {
  let component: NewestCollectionComponent;
  let fixture: ComponentFixture<NewestCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
