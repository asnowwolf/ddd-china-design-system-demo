import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorNavComponent } from './major-nav.component';

describe('MajorNavComponent', () => {
  let component: MajorNavComponent;
  let fixture: ComponentFixture<MajorNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MajorNavComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
