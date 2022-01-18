import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'auth',
  loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {path: 'products',
  loadChildren: () => import('./productos/productos.module').then( m => m.ProductosModule)
  },
  {path: '**', redirectTo: 'auth'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
