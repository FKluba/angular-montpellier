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
import { ItemsModule } from './items/items.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

// TODO: lazy loading and preloading strategy

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
    ItemsModule,
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
