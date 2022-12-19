import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'onglet',
    loadChildren: () => import('./onglet/onglet.module').then( m => m.OngletPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./connexion/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./connexion/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
