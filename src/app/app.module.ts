import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, MatFormFieldModule, MatSnackBarModule, MatInputModule } from "@angular/material";
import { AnasayfaYaziComponent } from './components/anasayfa-yazi/anasayfa-yazi.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { YaziComponent } from './components/yazi/yazi.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { TakipcilerComponent } from './components/takipciler/takipciler.component';
import { KayitComponent } from './components/kayit/kayit.component';
import { FormsModule } from '@angular/forms';
import { GirisComponent } from './components/giris/giris.component';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaYaziComponent,
    AnasayfaComponent,
    YaziComponent,
    UsersComponent,
    UserComponent,
    TakipcilerComponent,
    KayitComponent,
    GirisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    GraphQLModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
