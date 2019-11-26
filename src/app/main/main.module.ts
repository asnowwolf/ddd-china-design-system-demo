import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientMapComponent } from './client-map/client-map.component';
import { GeoMapComponent } from './client-map/geo-map/geo-map.component';
import { ChartComponent } from './completion/chart/chart.component';
import { CompletionComponent } from './completion/completion.component';
import { FilterComponent } from './filter/filter.component';
import { MainComponent } from './main.component';
import { NotificationComponent } from './notification/notification.component';
import { ProjectItemComponent } from './project-list/project-item/project-item.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    MainComponent,
    NotificationComponent,
    FilterComponent,
    ProjectListComponent,
    SummaryComponent,
    CompletionComponent,
    ClientMapComponent,
    ChartComponent,
    ProjectItemComponent,
    GeoMapComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MainComponent,
  ],
})
export class MainModule {
}
