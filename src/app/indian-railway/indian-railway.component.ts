import { Component } from '@angular/core';
// import {Observable} from 'rxjs';
// import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
//import { RailwayService } from './railway.service';

@Component({
  selector: 'app-indian-railway',
  templateUrl: './indian-railway.component.html',
  styleUrls: ['./indian-railway.component.css']
})
export class IndianRailwayComponent  {

  // public model: any;
  // text: string;

  // results: string[];
  // train: any;
  // trains: any[];
  // filteredTransSingle: any[];

  // constructor(private _railwayService: RailwayService) { }

//   filterCountrySingle(event) {
//     let query = event.query;
//     // this._railwayService.getTrainList(query).then(trains => {
//     //     this.filteredTransSingle = this.filterRailway(query, trains);
//     // });
//     this._railwayService.getTrainList(query).subscribe((trains)=>{this.filteredTransSingle=this.filterRailway(query, trains)});
// }

// filterRailway(query, trains: any[]):any[] {
//   let filtered : any[] = [];
//   for(let i = 0; i < trains.length; i++) {
//       let train = trains[i];
//       if(train.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
//           filtered.push(train);
//       }
//   }
//   return filtered;
// }

  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? []
  //       : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   );


}
