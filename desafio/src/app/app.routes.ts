import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

export const routes: Routes = [
  { 
    path: '', 
    component: PostListComponent  // <-- Use 'component' em vez de 'loadComponent'
  },
  {
    path: 'posts/new',
    component: PostCreateComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
];