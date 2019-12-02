import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginlogout: string = 'Login';

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onLoginLogout(){
    if(!this.authService.loggedIn){
      this.authService.login();
      this.loginlogout = 'Logout';
    } else {
      this.router.navigate(['/'], {relativeTo: this.route});
      this.authService.logout();
      this.loginlogout = 'Login';
    }
  }

}
