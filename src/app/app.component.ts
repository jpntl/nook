import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './components/base/base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BaseComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {

}
