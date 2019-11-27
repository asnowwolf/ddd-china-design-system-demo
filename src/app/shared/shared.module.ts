import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { IconCalendarComponent } from './icon-calendar/icon-calendar.component';
import { IconExportComponent } from './icon-export/icon-export.component';
import { IconFilterComponent } from './icon-filter/icon-filter.component';
import { IconInfoComponent } from './icon-info/icon-info.component';
import { IconLogoComponent } from './icon-logo/icon-logo.component';
import { IconMoreComponent } from './icon-more/icon-more.component';
import { IconShareComponent } from './icon-share/icon-share.component';


@NgModule({
  declarations: [
    IconLogoComponent,
    IconInfoComponent,
    IconFilterComponent,
    IconShareComponent,
    IconExportComponent,
    IconCalendarComponent,
    IconMoreComponent,
    CheckboxComponent,
    RadioComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IconLogoComponent,
    IconInfoComponent,
    IconFilterComponent,
    IconShareComponent,
    IconExportComponent,
    IconCalendarComponent,
    IconMoreComponent,
    CheckboxComponent,
    RadioComponent,
    CalendarComponent,
  ],
})
export class SharedModule {
}
