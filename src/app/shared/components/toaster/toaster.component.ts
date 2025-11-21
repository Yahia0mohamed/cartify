import { Component } from '@angular/core';
import { Toast, ToasterService } from '@core/services/toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html'
})
export class ToasterComponent {
  toast: Toast | null = null;

  constructor(private toaster: ToasterService) {
    this.toaster.toast$.subscribe(toast => {
      this.toast = toast;
    });
  }
}
