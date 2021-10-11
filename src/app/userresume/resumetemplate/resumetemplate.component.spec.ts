import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumetemplateComponent } from './resumetemplate.component';

describe('ResumetemplateComponent', () => {
  let component: ResumetemplateComponent;
  let fixture: ComponentFixture<ResumetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumetemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
