import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';
import { Store } from '@ngrx/store';
import { selectCartCount } from '@features/cart/store/cart.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  cartCount$: Observable<number>;
  showCartModal = false;
  protected isLoggedIn: boolean;
  constructor(private auth: AuthService, private router: Router, private store: Store) {
    this.cartCount$ = this.store.select(selectCartCount);
  }
  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
  goToHome(): void {
    this.router.navigate(['/']);
  }
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
  goToRegister(): void {
    this.router.navigate(['/register']);
  }
  logout(): void {
    this.auth.logout();
    this.isLoggedIn = this.auth.isLoggedIn();
    this.router.navigate(['/']);
  }
  goToCart(): void {
    this.showCartModal = true;  // instead of navigating
  }

  closeCart(): void {
    this.showCartModal = false;
  }
}
