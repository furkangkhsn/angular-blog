import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { YaziComponent } from './yazi/yazi.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard' ,pathMatch: 'full'},
  { path: 'dashboard', component: AnasayfaComponent },
  { path: 'yazi/:id', component: YaziComponent},
  { path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
