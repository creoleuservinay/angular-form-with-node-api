import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  showSuccess(v: any, message: any) {
    this.toastr.success(v.email, message);
  }
  showFail(message: any) {
    this.toastr.error(message, message);
  }
}