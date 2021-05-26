import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLandingComponent } from './list-landing/list-landing.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {path: 'observable', component:ObservableComponent},
  {path: 'list', component:ListLandingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
