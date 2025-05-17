import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';

export const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
];

@Component({
  standalone: true,
  imports: [CommonModule,],
})
export class PostDetailComponent { }

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  bootstrap: []
})
export class AppModule {}
