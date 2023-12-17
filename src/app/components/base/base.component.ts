import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { UserSummaryComponent } from '../user-summary/user-summary.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [NavComponent, UserSummaryComponent],
  templateUrl:'./base.component.html',
  styles: ``
})
export class BaseComponent {

}
