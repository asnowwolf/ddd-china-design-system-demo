import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BrandComponent } from './brand/brand.component';
import { HeaderComponent } from './header.component';
import { MajorNavComponent } from './major-nav/major-nav.component';
import { AvatarComponent } from './minor-nav/avatar/avatar.component';
import { MinorNavComponent } from './minor-nav/minor-nav.component';
import { NotificationsComponent } from './minor-nav/notifications/notifications.component';
import { SearchComponent } from './minor-nav/search/search.component';
import { SettingsComponent } from './minor-nav/settings/settings.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BrandComponent,
    MajorNavComponent,
    MinorNavComponent,
    SearchComponent,
    NotificationsComponent,
    SettingsComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
