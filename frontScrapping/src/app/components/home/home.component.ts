import { NewsServices } from './../../services/NewsServices';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from '../../services/MessageService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  message: string = "national";
  subscription: Subscription;
  showinfo: boolean;
  listInfo: any;

  constructor(private messageService: MessageService, private _router: Router, private NewsServices: NewsServices) {
    this.showinfo = false;
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.message = message.text;
        this.loadNewsforType(this.message);
      }
      ;
    });
  }

  loadNewsforType(message: string) {
    this.showinfo = false;
    this.NewsServices.requestNews(message).subscribe(res => {
      this.listInfo = res;
    });
    this.showinfo = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.loadNewsforType('national');
  }

  newsSelect(news: string) {
    sessionStorage.setItem('url', JSON.stringify(news));
    this._router.navigate([`/showNew`]);
  }
}
