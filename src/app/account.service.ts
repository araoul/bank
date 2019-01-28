import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  details = {
    amount: 4000, 
    type_compte : "courant",
    date: new Date()
  }
  operations = [
    {type: "versement", date: new Date(), amount: 6000},
    { type: "retrait", date: new Date(), amount: 4500},
    { type: "retrait", date: new Date(), amount: 500},
    { type: "versement", date: new Date(), amount: 8000}
  ];

  getAllperations(){
    return  this.operations;
  }

  getDetails(){
    return this.details;
  }
  constructor() { }
}
