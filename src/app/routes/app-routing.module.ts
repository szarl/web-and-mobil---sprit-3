import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // CLI imports router
import { routes } from './AppRouting';

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }