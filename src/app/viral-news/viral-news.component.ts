import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';
import { ViralService } from './viral.service';
@Component({
  selector: 'app-viral-news',
  templateUrl: './viral-news.component.html',
  styleUrls: ['./viral-news.component.css'],
  providers:[ViralService]
})
export class ViralNewsComponent implements OnInit {
  news={};
  today: any;
 
  tags=['Business','Technology','Sport','Art','Lifestyle','Photography','Education','Social'];
  constructor(private _viralService:ViralService) { 
        this.today=moment(new Date()).format('YYYY-MM-DD');
  }

  ngOnInit() {
    this._viralService.getViral().subscribe((viralData)=>this.news=viralData);
    
  }

  loadTags(value){
    this._viralService.getTagedNews(value,this.today).subscribe((viralData)=>this.news=viralData);
  }


}
