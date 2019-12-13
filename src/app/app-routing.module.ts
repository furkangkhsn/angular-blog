import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { YaziComponent } from './components/yazi/yazi.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { TakipcilerComponent } from './components/takipciler/takipciler.component';
import { KayitComponent } from './components/kayit/kayit.component';
import { GirisComponent } from './components/giris/giris.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' ,pathMatch: 'full'},
  { path: 'dashboard', component: AnasayfaComponent },
  { path: 'yazi/:id', component: YaziComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:user_id', component: UserComponent },
  { path: 'user/:user_id/takipciler', component: TakipcilerComponent },
  { path: 'kayit', component: KayitComponent },
  { path: 'giris', component: GirisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
