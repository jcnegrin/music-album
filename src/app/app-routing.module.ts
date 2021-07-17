import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'listen-now',
    loadChildren: () =>
      import('./listen-now/listen-now.module').then((m) => m.ListenNowModule),
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./albums/albums.module').then((m) => m.AlbumsModule),
  },
  {
    path: 'artists',
    loadChildren: () =>
      import('./artists/artists.module').then((m) => m.ArtistsModule),
  },
  { path: '', redirectTo: '/listen-now', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
