import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PriceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    PortalModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    PortalModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class PageModule { }
