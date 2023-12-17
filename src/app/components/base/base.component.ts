import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { UserSummaryComponent } from '../user-summary/user-summary.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [NavComponent, UserSummaryComponent, CommonModule],
  templateUrl:'./base.component.html',
  styles: ``
})
export class BaseComponent implements OnInit {
  title = 'nook';
  showMainWindow: boolean = false;

  ngOnInit(): void {
    console.log(`Base Component Init. Welcome to ${this.title}`);
    this.determineView();
  }

  determineView() {
    // determine x view on y event, switch case probably
    this.showMainWindow = true;
  }
}
