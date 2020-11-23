import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigDetailsPage } from './config-details.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigDetailsPageRoutingModule {}
