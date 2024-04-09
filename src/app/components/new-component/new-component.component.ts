import { Component } from '@angular/core';

@Component({
  selector: 'new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
  styles: [
    `
      h2 {
        color: purple;
      }
    `,
  ],
})
export class NewComponent {}
