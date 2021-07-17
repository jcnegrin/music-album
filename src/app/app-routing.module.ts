import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'listen-now',
    loadChildren: () =>
      import('./listen-now/listen-now.module').then((m) => m.ListenNowModule),
  },
  { path: '', redirectTo: '/listen-now', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
