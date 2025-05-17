import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  private fb = inject(FormBuilder);
  private postService = inject(PostService);
  private router = inject(Router);
  isLoading = false;

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required]],
    content: ['', [Validators.required]],
    avatar: ['', [Validators.required, Validators.pattern(/^(https?:\/\/).+\.(jpg|jpeg|png|gif)$/i)]]
  });

  onSubmit() {
    if (this.form.invalid) return;

    this.isLoading = true;
    
    const newPost = {
      title: this.form.value.title!,
      description: this.form.value.description!,
      content: this.form.value.content!,
      avatar: this.form.value.avatar!,
      imageUrl: this.form.value.avatar!
    };

    this.postService.createPost(newPost).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Erro:', error);
        this.isLoading = false;
        alert('Erro ao criar post!');
      }
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    
    if (control?.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    
    if (control?.hasError('minlength')) {
      return `Mínimo de ${control.errors?.['minlength'].requiredLength} caracteres`;
    }
    
    if (control?.hasError('pattern')) {
      return 'URL de imagem inválida (use .jpg, .jpeg, .png ou .gif)';
    }
    
    return '';
  }
}