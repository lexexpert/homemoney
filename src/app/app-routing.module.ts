import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';


const routes: Routes = [
  {path: 'login', component: AuthComponent, children: [
        {path: '', component: LoginComponent}
      ]
  },
  {path: 'registration', component: AuthComponent, children: [
      {path: '', component: RegistrationComponent}
    ]
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'system', loadChildren: './system/system.module#SystemModule'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
