import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { format } from 'util';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent implements OnInit {
  frmGrp: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
      this.frmGrp = this.fb.group({
        usNm : this.fb.control(''),
        eml : this.fb.control(''),
        pass : this.fb.control('')

    })

  }
  mySub() {
    console.log(this.frmGrp)
      }
}
