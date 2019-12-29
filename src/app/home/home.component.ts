import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  userPic = '';

  authServiceSubscription: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authServiceSubscription = this.authService.user$.subscribe(user => {
      this.userPic = user.photoURL;
    });
  }

  ngOnDestroy(): void {
    this.authServiceSubscription.unsubscribe();
  }

}
