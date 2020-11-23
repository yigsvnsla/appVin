
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:"gallery",
        loadChildren: ()=>import('../gallery/gallery/gallery.module').then(m => m.GalleryPageModule)
      },{
        path:'vin-scan',
        loadChildren: ()=>import('../vinList/vin-list/vin-list.module').then(m => m.VinListPageModule)
      },{
        path:'configApp',
        loadChildren: ()=>import('../page-config/page-config.module').then(m => m.PageConfigPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
