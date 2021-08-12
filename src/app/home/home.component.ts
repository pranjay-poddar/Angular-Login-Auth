import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../services/records.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   records:any;
  constructor(private rService : RecordsService) {
   }

  ngOnInit() {
      this.rService.getData().subscribe( data => {
      this.records = data.obj;
    })
  }

}
