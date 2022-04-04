import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    {
        path: 'pages',
        loadChildren: () => import('./pages/page-layout/page-layout.module').then(m => m.PageLayoutModule)
    },
    {path: '', redirectTo:'pages', pathMatch:'full'},
    
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }