import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { SettingComponent } from './components/setting/setting.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    SettingComponent,
    HeaderComponent,
    FooterComponent,
    NavLeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
