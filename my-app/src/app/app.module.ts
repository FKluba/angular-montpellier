// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

// external libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// custom created modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // regroupe les modules
    BrowserModule,
    CoreModule,
    SharedModule,
    NgbModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    HomeModule,
    PageNotFoundModule
  ],
  declarations: [
    // regroupe tous les composants de notre application
    AppComponent
  ],
  providers: [],
  // détermine quel composant sera démarré sur le module root
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
