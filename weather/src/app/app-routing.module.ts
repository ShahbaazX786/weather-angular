import { PnfComponent } from './components/pnf/pnf.component';
import { BodyComponent } from './components/body/body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'body', pathMatch:'full',component:BodyComponent},
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
