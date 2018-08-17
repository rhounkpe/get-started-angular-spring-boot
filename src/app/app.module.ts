import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

const routes = [
  {'path': 'welcome', 'component': WelcomeComponent},
  {'path': 'list', 'component': ProductsListComponent},
  {'path': 'detail/:id', 'component': ProductsDetailsComponent},
  {'path': '', redirectTo: '/welcom', pathMatch: 'full'},
  {'path': '**', 'component': NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    FooterComponent,
    WelcomeComponent,
    NotFoundComponent,
    ProductsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
