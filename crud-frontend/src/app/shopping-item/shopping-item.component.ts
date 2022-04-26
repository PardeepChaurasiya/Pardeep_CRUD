import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers : [DataService]
})
export class ShoppingItemComponent implements OnInit {

  shoppingItemList : any;
  selectedItem : Item;
  toggleForm: boolean = false;
  acknowledged =true;
  
  constructor(private dataService : DataService) { }

  getItems(){
    this.dataService.getShoppingItems()
    .subscribe({next : (items)=>{
      this.shoppingItemList = items;
      }
    })
  }

  addItem(form){
    let newItem : Item ={
      itemName : form.value.itemName,
      itemQuantity : form.value.itemQuantity,
      itemBought : false
    }
    this.dataService.addShoppingItem(newItem)
    .subscribe(item =>{
      this.getItems();
    })
  }

  deleteItem(id){
    console.log(id)
    this.dataService.deleteShoppingItem(id)
    .subscribe(data =>{
      if(data){
        for(var i=0; i< this.shoppingItemList.lenghth;i++){
          if(id == this.shoppingItemList[i]._id){
            this.shoppingItemList.splice(1,1)
          }
        }
      }
      this.getItems();
    })
  }

  showEditForm(item){
    this.selectedItem = item;
    this.toggleForm = !this.toggleForm
  }

  editItem(form){
    let newItem : Item = {
      _id : this.selectedItem._id,
      itemName : form.value.itemName,
      itemQuantity : form.value.itemQuantity,
      itemBought : this.selectedItem.itemBought
    }

    this.dataService.updateShoppingItem(newItem)
    .subscribe(result =>{
      this.getItems();
    })
    this.toggleForm = !this.toggleForm
  }

  ngOnInit(): void {
    this.getItems()
  }

}
