import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentListItemPageComponent } from './content-list-item-page/content-list-item-page.component';

const routes: Routes =[
    {
      path: "",
      redirectTo: "/content",
      pathMatch: "full"
      
    },
    {
      path: "content",
      component: ContentListComponent
    },
    {
      path:"content/:id",
      component: ContentListItemPageComponent
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
