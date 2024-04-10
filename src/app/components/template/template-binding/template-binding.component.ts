import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
})
export class TemplateBindingComponent {
  public name: string = 'Isabella Gouveia';
  public age: number = 19;
  public condition = this.age > 1 ? 'true' : 'false';
  public isDisabeld = true;
  public srcValue =
    'https://angular.io/assets/images/logos/angular/angular.svg';
  public isTextDecoration = this.age >= 22 ? 'underline' : 'none';

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({ clientx: event.clientX, clientY: event.clientY });
  }
}
