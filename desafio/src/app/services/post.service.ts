import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  avatar: string;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  createPost(post: Omit<Post, 'id' | 'createdAt'>): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }
}