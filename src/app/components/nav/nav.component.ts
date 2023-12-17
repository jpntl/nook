import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {
  user = 'joep'
  greeting: string = `user@${this.user}`;
}
