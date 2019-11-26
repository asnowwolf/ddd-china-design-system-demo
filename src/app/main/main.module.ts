import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientMapComponent } from './client-map/client-map.component';
import { CompletionComponent } from './completion/completion.component';
import { FilterComponent } from './filter/filter.component';
import { MainComponent } from './main.component';
import { NotificationComponent } from './notification/notification.component';
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
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainComponent,
  ],
})
export class MainModule {
}
