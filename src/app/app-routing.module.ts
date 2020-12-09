import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListScreenComponent } from './list-screen/list-screen.component';
import { DetailScreenComponent } from './detail-screen/detail-screen.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'default', component: AppComponent},
  { path: 'detail-screen', component: DetailScreenComponent },
  { path: '',   redirectTo: '/default', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
