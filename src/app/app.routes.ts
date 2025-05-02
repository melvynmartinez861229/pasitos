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
  },
  {
    path: 'actividades',
    loadComponent: () => import('./pages/actividades/actividades.page').then( m => m.ActividadesPage)
  },
  {
    path: 'cancionesyrondas',
    loadComponent: () => import('./pages/cancionesyrondas/cancionesyrondas.page').then( m => m.CancionesyrondasPage)
  },
  {
    path: 'juegosinteractivos',
    loadComponent: () => import('./pages/juegosinteractivos/juegosinteractivos.page').then( m => m.JuegosinteractivosPage)
  },
  {
    path: 'parajugar',
    loadComponent: () => import('./pages/parajugar/parajugar.page').then( m => m.ParajugarPage)
  },
  {
    path: 'mensajesedicativos',
    loadComponent: () => import('./pages/mensajesedicativos/mensajesedicativos.page').then( m => m.MensajesedicativosPage)
  },
  {
    path: 'derechos',
    loadComponent: () => import('./pages/derechos/derechos.page').then( m => m.DerechosPage)
  }


];
