import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { stockComponent } from './stock.component';
import { stock2Component } from './stock2.component';
import { stockDepartamentoComponent } from './stockDepartamentos.component';

const routes: Routes = [
  
      {
        path: 'inventario',
        component: stockComponent,
        data: {
          title: 'Inventario'
        }
      },
      {
        path: 'secundario',
        component: stock2Component,
        data: {
          title: 'Stock secundario'
        }
      },
      {
        path: 'stockDepartamento',
        component: stockDepartamentoComponent,
        data: {
          title: 'Stock del departamento'
        }
      }
   
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class reportesRoutingModule {}
