import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MessageService } from '../../services/MessageService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  message: string = "Nacionales";
  subscription: Subscription;
  showinfo: boolean;

  constructor(private messageService: MessageService) {
    this.showinfo =  false;
    if(sessionStorage.getItem('page')){
      this.loadNewsforType('Nacionales');
      sessionStorage.removeItem('page');
    }
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.message = message.text;
          this.loadNewsforType(this.message);
      } 
    ;
    });
  }

  loadNewsforType(message:string){
    console.log(message);
    this.showinfo =  true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {

  }
}
