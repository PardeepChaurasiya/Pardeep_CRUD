import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getShoppingItems(){
    return this.http.get('http://localhost:4000/api/item')
  }
  
  addShoppingItem(newItem){
    return this.http.post('http://localhost:4000/api/item', newItem)
  }
  
  deleteShoppingItem(id){
    return this.http.delete('http://localhost:4000/api/item/'+id)
  }
  
  updateShoppingItem(newItem){
    return this.http.put('http://localhost:4000/api/item/'+newItem._id,newItem)
  }
}
