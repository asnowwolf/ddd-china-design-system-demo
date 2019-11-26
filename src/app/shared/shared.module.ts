import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
  ],
})
export class SharedModule {
}
