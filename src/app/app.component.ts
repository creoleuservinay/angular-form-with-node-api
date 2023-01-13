import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { NotificationService } from './notification.service';
import { User } from './user';
import { USERDTO } from './dto/userdto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loader = false;
  title = 'practice-angular';
  userName: string = "";
  items = ["Book", "Light"];
  topics = ["Javascript", "Mysql", "Angular"];
  countries = ["India", "USA"];
  topicValidated = false;
  

  userModel: USERDTO = {
    name: '',
    email: '',
    topic: '',
    timepreference: '',
  }

  constructor(
    private enrollmentService: EnrollmentService,
    private notify: NotificationService
  ) {

  }
  userNameChange(event: any) {
    this.userName = event.target.value;
  }

  validateInputs(topic: string, topicObj: any) 
  {
    topicObj.name == 'topic' && this.topics.includes(topic) ? this.topicValidated = true : false;
  }
  addItem(newItem: string)
  {
    newItem && this.items.indexOf(newItem) == -1 ? this.items.push(newItem) : '';
  }
  async enrollUser() {
    let message = 'Register Successfull With Email';
    this.loader = true;
    await this.enrollmentService.enroll(this.userModel).subscribe(
      {
        next: (v) => {
          this.loader = false;
          this.notify.showSuccess(v, message);
        },
        complete: () => {
          this.loader = false;
        },
        error: (e) => {
          let message = 'Something went wrong';
          this.loader = false;
          this.notify.showFail(message);
        },
      }
    );
  }
}