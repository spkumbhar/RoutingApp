import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { unwrapResolvedMetadata } from '@angular/compiler';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  usId: string;
  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.params.subscribe(
      prm => this.usId = prm.usId


    )
  }

}
