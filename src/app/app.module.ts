import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieComponent } from './movie/movie.component';
import { SerieComponent } from './serie/serie.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { ApiConfigService } from './api-config.service';

export function initApp(api_config: ApiConfigService) {
  return () => api_config.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainPageComponent,
    MovieComponent,
    SerieComponent,
    MediaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [ApiConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
