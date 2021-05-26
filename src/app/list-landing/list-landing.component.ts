import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ListDataService} from '../list-data.service';


@Component({
  selector: 'app-list-landing',
  templateUrl: './list-landing.component.html',
  styleUrls: ['./list-landing.component.css']
})
export class ListLandingComponent implements OnInit {

  msg = false;
  form: any;

  constructor(
    public listService: ListDataService,
    ) { }

  addNewName() {
    const newName = {id: 88, fname: "raj", lname: "bhavan"};

    this.listService.postList(newName).subscribe(data => {
      console.log(data);
      this.msg = true;
    })
  }

  list: any;
  ngOnInit(): void {

    // this.list = this.listService.getList();
    this.listService.getList().subscribe(data=>{
      this.list = data;
    })
  }

}
