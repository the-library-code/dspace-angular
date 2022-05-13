import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureNoteComponent } from './lecture-note.component';

describe('LectureNoteComponent', () => {
  let component: LectureNoteComponent;
  let fixture: ComponentFixture<LectureNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
