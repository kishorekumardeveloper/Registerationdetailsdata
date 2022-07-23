import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventDetails } from '../models/event-model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  form!: FormGroup;
 tabledata:any[] =[];
 count=0;
 event:EventDetails = new EventDetails()
data:any;
kt:any;
  constructor(
    public fb: FormBuilder,public router: Router,

  ) {}


  ngOnInit(): void {
  

  this.form = this.fb.group({
    
    name: ['', Validators.required],
    phoneno: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    State: ['', Validators.required],
    Country: ['', Validators.required],
  });
this.data= localStorage.getItem('form');
this.kt = JSON.parse(this.data)


  if(this.kt !=null){
    this.tabledata = this.kt;
    this.count = this.kt.length +1;
  }

  }
  submit(){
   
    if(this.form.valid){
      this.event = new EventDetails();

this.event.Name = this.form.get('name')?.value;
this.event.Mobile = this.form.get('phoneno')?.value;
this.event.Email = this.form.get('email')?.value;
this.event.Address = this.form.get('address')?.value;
this.event.State = this.form.get('State')?.value;
this.event.Country = this.form.get('Country')?.value;
this.event.id =  this.count;
    }
 
    this.tabledata.push(this.event);
    console.log(this.tabledata);
   localStorage.setItem('form',JSON.stringify(this.tabledata));
   this.router.navigate(['validate']);
  }
}
