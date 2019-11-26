import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { AsideComponent } from './aside.component';
import { AuthorsComponent } from './authors/authors.component';
import { LinksComponent } from './links/links.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [
    AsideComponent,
    AboutComponent,
    AuthorsComponent,
    TagsComponent,
    LinksComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    AsideComponent,
  ],
})
export class AsideModule {
}
