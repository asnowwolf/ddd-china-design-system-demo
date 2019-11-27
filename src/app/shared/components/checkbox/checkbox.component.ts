import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: CheckboxComponent, multi: true },
  ],
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  constructor() {
  }

  @Input()
  label = '';
  @Input()
  indeterminate = false;
  value = false;
  private disabled = false;
  private onChange: (value: boolean) => void;
  private onTouched: () => void;

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  toggle(): void {
    this.value = !this.value;
    this.changed();
  }

  private changed(): void {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }
}
