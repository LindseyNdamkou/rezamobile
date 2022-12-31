import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngletPage } from './onglet.page';


const routes: Routes = [
  {
    path: '',
    component: OngletPage,
    children : [
        {
          path: 'profil',
          loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
        },
        {
          path: 'home',
          loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
        },
        {
          path: 'favoris',
          loadChildren: () => import('./favoris/favoris.module').then( m => m.FavorisPageModule)
        },
        {
          path: 'details',
          loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
        },
    ],
  },
  {
    path: 'formulairereservation',
    loadChildren: () => import('./formulairereservation/formulairereservation.module').then( m => m.FormulairereservationPageModule)
  },
  

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngletPageRoutingModule {}
