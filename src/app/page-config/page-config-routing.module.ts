import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageConfigPage } from './page-config.page';

const routes: Routes = [
  {
    path: '',
    component: PageConfigPage
  },
  {
    path: 'config-details',
    loadChildren: () => import('./config-details/config-details.module').then( m => m.ConfigDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageConfigPageRoutingModule {}
