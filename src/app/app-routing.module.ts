import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecificationsComponent } from "./specifications/specifications.component";

const routes: Routes = [
//   { path: 'posts', component: PostListComponent },
//   {
//     path: 'posts/category', children: [
//       { path: '', component: CategoryListComponent },
//       { path: ':category', component: CategorySingleComponent }
//     ]
//   },
//   {
//     path: 'posts/:slug',
//     component: PostSingleComponent
//   },
//   { 
//     path: 'analytical-services', 
//     loadChildren: 'app/analytical-services/analytical-services.module#AnalyticalServicesModule'
//   },
//   {
//     path: 'components',
//     loadChildren: 'app/components/components.module#ComponentsModule'
//   },
  {
    path: 'history',
    loadChildren: 'app/history/history.module#HistoryModule'
  },
//   {
//     path: 'for-sale',
//     loadChildren: 'app/for-sale/for-sale.module#ForSaleModule'
//   },
  // {
  //   path: 'specifications',
  //   loadChildren: 'app/specifications/specifications.module#SpecificationsModule'
  // },
  {
    path: 'specifications',
    component: SpecificationsComponent
  },
  {
    path: 'contact', 
    loadChildren: 'app/contact/contact.module#ContactModule'
  },
//   {
//     path: '',
//     component: PostListComponent,
//     pathMatch: 'full'
//   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }