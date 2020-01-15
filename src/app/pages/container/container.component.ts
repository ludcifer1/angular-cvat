import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FakeDataService } from 'src/app/services/fakeDataService.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {


  constructor(private fakeDataService: FakeDataService) { }

  ngOnInit() {
    this.fakeDataService.fetchData().subscribe(
      res => {
        console.log('res', res);

      }
    );
  }

}
