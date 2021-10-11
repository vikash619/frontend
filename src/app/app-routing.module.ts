import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorcomponentComponent } from './component/errorcomponent/errorcomponent.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { path : '', component: HomeComponent},
  { path: 'userlog', loadChildren: () => import('./userlog/userlog.module').then(m => m.UserlogModule) },
  { path: 'userresume', loadChildren: () => import('./userresume/userresume.module').then(m => m.UserresumeModule) },
  { path : "**", component: ErrorcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent];
