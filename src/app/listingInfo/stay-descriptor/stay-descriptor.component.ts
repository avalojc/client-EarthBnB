import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-stay-descriptor',
  templateUrl: './stay-descriptor.component.html',
  styleUrls: ['./stay-descriptor.component.css']
})
export class StayDescriptorComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('listingdata') listingData: Data;

  stayDescriptor: string = 'Cute Bungalow Stay';
  hostName: string = 'Adam and Liz';
  hostImage: string = 'HostImage';
  guestNum: string = '4 guests';
  bedroomNum: string = '1 bedroom';
  bedCountNum: string = '2 beds';
  bathNum: string = '1 bath';


  constructor() { }

  ngOnInit(): void {
  }

}
