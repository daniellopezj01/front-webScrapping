import { NewsServices } from './../../services/NewsServices';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.scss']
})
export class ShowNewComponent implements OnInit {
  showinfo: boolean;
  url: string;
  constructor(private NewsServices: NewsServices) {
    if (sessionStorage.getItem('url')) {
      this.url = JSON.parse( sessionStorage.getItem('url'));
    }
    console.log(this.url);
  }

  
  ngOnInit() {
  }

}
