import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'modal-gallery',
    loadChildren: () => import('./gallery/modal-gallery/modal-gallery.module').then( m => m.ModalGalleryPageModule)
  },
  {
    path: 'vin-list',
    loadChildren: () => import('./vinList/vin-list/vin-list.module').then( m => m.VinListPageModule)
  },
  {
    path: 'modal-vin-list',
    loadChildren: () => import('./vinList/modal-vin-list/modal-vin-list.module').then( m => m.ModalVinListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
