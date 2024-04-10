import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss',
})
export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;
  @ViewChild(NewComponent) public childComponent!: NewComponent;

  ngAfterViewInit(): void {
    console.log('name', this.nameInput.nativeElement.value);
    console.log('h2', this.nameH2.nativeElement.innerHTML);
    console.log('newComponent', this.childComponent.name);
  }
}
