import { Component, OnInit } from '@angular/core';
import { AddsService } from './shared/services/adds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allAdds: any = [];
  slotAdds: any = [];

  constructor(private _addService: AddsService) { }

  ngOnInit(): void {
    this.getSlotAdds();
    this.getAddsList();
  }

  getSlotAdds() {
    this._addService.slotAdds().subscribe(
      res => this.slotAdds = res,
      err => console.log(err)
    )
  }

  getAddsList() {
    this._addService.allAdds().subscribe(
      res => this.allAdds = res,
      err => console.log(err)
    )
  }

  saveConv(data) {
    this._addService.saveConv(data).subscribe(
      res => {
        console.log(res)
        this.getAddsList();
      },
      err => {
        console.log(err)
      }
    )
  }
}
