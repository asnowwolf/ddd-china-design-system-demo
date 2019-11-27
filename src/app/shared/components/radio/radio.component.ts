import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: RadioComponent, multi: true },
  ],
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  constructor() {
  }

  @Input()
  label = '';
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
