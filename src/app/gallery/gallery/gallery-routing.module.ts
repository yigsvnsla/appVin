import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryPage } from './gallery.page';

const routes: Routes = [
  {
    path: '',
    component: GalleryPage
  },
  {
    path: 'modal-gallery',
    loadChildren: () => import('../modal-gallery/modal-gallery.module').then( m => m.ModalGalleryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryPageRoutingModule {}
