import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.scss']
})
export class UserSummaryComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'Joe Pantaliono',
    email: 'joe@website.com',
    activeStatus: true,
    admin: true
  }

  showUserInfo: boolean = false;

  ngOnInit(): void {
    this.showUserInfo = this.user.admin;
  }
}
