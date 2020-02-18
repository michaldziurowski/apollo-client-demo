import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewHelloComponent } from "./new-hello/new-hello.component";
import { OtherHelloComponent } from "./other-hello/other-hello.component";

const routes: Routes = [
  { path: "", component: NewHelloComponent },
  { path: "other", component: OtherHelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
