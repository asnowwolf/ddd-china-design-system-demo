import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorNavComponent } from './minor-nav.component';

describe('MinorNavComponent', () => {
  let component: MinorNavComponent;
  let fixture: ComponentFixture<MinorNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MinorNavComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
