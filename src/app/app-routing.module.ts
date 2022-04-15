import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';

const routes: Routes = [
    {
        path: '',
        component:PageLayoutComponent,
        loadChildren: () => import('./pages/page-layout/page-layout.module').then(m => m.PageLayoutModule)
    },
    // {
    //   path:'layout',
    //   loadChildren:() => import('./features/layout/layout.module').then(m => m.LayoutModule)
    // }
    
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }