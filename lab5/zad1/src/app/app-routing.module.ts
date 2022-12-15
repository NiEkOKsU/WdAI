import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { SinglephotoComponent } from './singlephoto/singlephoto.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path: 'main', component: MainpageComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'photos/:id', component: SinglephotoComponent},
  {path: '', redirectTo:'/posts', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
