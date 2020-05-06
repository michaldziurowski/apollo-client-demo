import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NewHelloComponent } from './new-hello/new-hello.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { OtherHelloComponent } from './other-hello/other-hello.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { AddToListComponentComponent } from './add-to-list-component/add-to-list-component.component';
import { RemoveItemComponentComponent } from './remove-item-component/remove-item-component.component';
import { UpdateItemComponentComponent } from './update-item-component/update-item-component.component';
import { CarInfoComponent } from './car-info/car-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NewHelloComponent,
    OtherHelloComponent,
    ListComponentComponent,
    AddToListComponentComponent,
    RemoveItemComponentComponent,
    UpdateItemComponentComponent,
    CarInfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
