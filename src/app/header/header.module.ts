import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandComponent } from './brand/brand.component';
import { HeaderComponent } from './header.component';
import { MajorNavComponent } from './major-nav/major-nav.component';
import { MinorNavComponent } from './minor-nav/minor-nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BrandComponent,
    MajorNavComponent,
    MinorNavComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
