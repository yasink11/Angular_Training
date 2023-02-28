import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListshomeComponent } from './listshome/listshome.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from "../shared/shared.module";
import { ItemlistComponent } from './itemlist/itemlist.component';


@NgModule({
    declarations: [
        ListshomeComponent,
        StatisticsComponent,
        ItemlistComponent
    ],
    imports: [
        CommonModule,
        ListsRoutingModule,
        SharedModule
    ]
})
export class ListsModule { }
