import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:'api/productcategories/:id/products',component:ProductListComponent},
  {path:'api/productcategories/products/search/:keyword',component:ProductListComponent},
  {path:'',redirectTo:'api/productcategories/1/products',pathMatch:'full'},
  {path:'**',redirectTo:'api/productcategories/1/products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
