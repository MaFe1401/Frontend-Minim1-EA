import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: 'formulario', loadChildren: () => import('./components/pages/formulario/formulario.module').then(m => m.FormularioModule) },
{path:'',redirectTo:'formulario',pathMatch:'full'},
{ path: 'listado', loadChildren: () => import('./components/pages/listado/listado.module').then(m => m.ListadoModule) }, 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
