import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMoreComponent } from './icon-more.component';

describe('IconMoreComponent', () => {
  let component: IconMoreComponent;
  let fixture: ComponentFixture<IconMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconMoreComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
