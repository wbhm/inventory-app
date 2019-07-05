import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { CustomMaterialModule } from './core/material.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRowComponent } from './components/product-row/product-row.component';

import { Product } from './models';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { CardComponent } from './components/card/card.component';

const products = [
  new Product('MYSHOES','Black Running Shoes','/assets/images/products/black-shoes.jpg',['Mens', 'Shoes', 'Running'],109.00),
  new Product('NEATOJACKET','Blue Jacket','/assets/images/products/blue-jacket.jpg',['Women', 'Apparel', 'Jackets & Vests'],238.99),
  new Product('NICEHAT','A Nice Black Hat','/assets/images/products/black-hat.jpg',['Men', 'Accessories','Hats'],29.99),
];

const appRoutes: Routes = [
  { path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'xCloud' } },
  { path: 'second', component: SecondComponent, data: { title: 'Product Two', productList: products } }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FirstComponent,
    SecondComponent,
    ProductListComponent,
    ProductRowComponent,
    ToolbarComponent,
    SideNavComponent,
    NavListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
