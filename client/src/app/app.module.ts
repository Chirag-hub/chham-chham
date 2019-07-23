import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
    ViewComponent,
    HeaderComponent,
    FormComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
