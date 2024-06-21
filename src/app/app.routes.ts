import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'proceso-adaptacion',
    loadComponent: () => import('./pages/proceso-adaptacion/proceso-adaptacion.page').then( m => m.ProcesoAdaptacionPage)
  },
  {
    path: 'lafamiliaenlaeducacion',
    loadComponent: () => import('./pages/lafamiliaenlaeducacion/lafamiliaenlaeducacion.page').then( m => m.LafamiliaenlaeducacionPage)
  },
  {
    path: 'manifestacionescomportamientos',
    loadComponent: () => import('./pages/manifestacionescomportamientos/manifestacionescomportamientos.page').then( m => m.ManifestacionescomportamientosPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'formacionhabitos',
    loadComponent: () => import('./pages/formacionhabitos/formacionhabitos.page').then( m => m.FormacionhabitosPage)
  }
];
