import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

   details :any;
   operations= [];
   operation = { type: "", date: null, amount: null};
  constructor(private _accountService : AccountService) {
    this.details=this._accountService.getDetails();
    this.operations= this._accountService.getAllperations();

   }

  ngOnInit() {
  }
  onAddOperation(o){
    o.date= new Date();
    this.operations.push(o);
    this.operation = { type: "", date: null, amount: null};
  }
 

}
