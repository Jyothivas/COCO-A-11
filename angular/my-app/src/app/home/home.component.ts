import { Component, Input } from '@angular/core';
import { User } from '../users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input()
  user!: User;
}
