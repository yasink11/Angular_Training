import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListshomeComponent } from './listshome/listshome.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path:'',component:ListshomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
