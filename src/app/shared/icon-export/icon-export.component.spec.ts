import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconExportComponent } from './icon-export.component';

describe('IconExportComponent', () => {
  let component: IconExportComponent;
  let fixture: ComponentFixture<IconExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconExportComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
