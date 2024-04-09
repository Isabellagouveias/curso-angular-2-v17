import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
})
export class TemplateBindingComponent {
  public name: string = 'Isabella Gouveia';
  public age: number = 22;
  public condition = this.age > 1 ? 'true' : 'false';

  public sum(val1: number, val2: number) {
    return val1 + val2;
  }
}
