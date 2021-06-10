import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recharge-telecom',
  templateUrl: './recharge-telecom.component.html',
  styleUrls: ['./recharge-telecom.component.css']
})
export class RechargeTelecomComponent implements OnInit {
  itemsList=[];
  radioSelected: any;

  constructor() { }

  ngOnInit(): void {
    this.radioSelected = "item_3";
    this.itemsList=[
      {
        name:"iam"
      },
      {
        name:"inwi"
      },
    ]
  }


  onItemChange(value: any) {
    console.log(value)

  }
}
