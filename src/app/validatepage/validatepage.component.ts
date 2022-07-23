import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';
import { FailurepopupComponent } from '../failurepopup/failurepopup.component';

import {MatDialog} from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-validatepage',
  templateUrl: './validatepage.component.html',
  styleUrls: ['./validatepage.component.css']
})
export class ValidatepageComponent implements OnInit {
  formdetails!: FormGroup;
  data:any;

  count:number =0;
  kr:any;
  constructor(
    public fb: FormBuilder,public router: Router,public MatDialog: MatDialog,private _location: Location
  ) { }

  ngOnInit(): void {
    this.formdetails = this.fb.group({
    
      uniqueid: ['', Validators.required],
 
    });
  }
  validate(){
    if(this.formdetails.valid){
    this.data= localStorage.getItem('form');
    console.log('form: ', JSON.parse(this.data));
this.kr =JSON.parse(this.data)
console.log(this.kr.length)
  for(let i=0; i<this.kr.length; i++){
    if(this.kr[i].id == this.formdetails.get('uniqueid')?.value || this.kr[i].Mobile ==this.formdetails.get('uniqueid')?.value){
this.count++;
    }
  }
  if(this.count >0){
    const viewdetails = this.MatDialog.open(PopupComponent, {  
      height: 'auto',
      width: '500px',
      autoFocus: false,
     
    })
    this.count =0;
  }else{
    const viewdetailsdata = this.MatDialog.open(FailurepopupComponent, {
    
      height: 'auto',
      width: '500px',
      autoFocus: false,
    })
  }
    }
   
  }
  back(){
    this._location.back();
  }
}
