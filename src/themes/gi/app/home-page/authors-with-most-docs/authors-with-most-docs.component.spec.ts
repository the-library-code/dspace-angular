import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsWithMostDocsComponent } from './authors-with-most-docs.component';

describe('AuthorsWithMostDocsComponent', () => {
  let component: AuthorsWithMostDocsComponent;
  let fixture: ComponentFixture<AuthorsWithMostDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsWithMostDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsWithMostDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
