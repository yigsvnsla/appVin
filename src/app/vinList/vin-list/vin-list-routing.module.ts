import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinListPage } from './vin-list.page';

const routes: Routes = [
  {
    path: '',
    component: VinListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinListPageRoutingModule {}
