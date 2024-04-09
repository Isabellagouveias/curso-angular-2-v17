import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent],
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
  template: `
    <h1>Curso de angular</h1>

    <app-template-binding />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
