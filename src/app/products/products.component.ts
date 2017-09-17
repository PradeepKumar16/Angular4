import { Component, OnInit, Input } from '@angular/core';
import { Products, Customers } from './model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
    @Input()
    product : Products;
    selectedProductId : number;
    //productId : any;
    // customerData = Customers[];
      products:any[] = [{
        
           productId: '0',
           productName:'BMW'
         },{
            productId:'1',
            productName:'Benz'
        },{
            productId:'2',
            productName:'Audi'
        }];

     onClick(num:number) {  

        this.product = this.products[this.selectedProductId];
        console.log(this.product);
     }

    // selectId(productId:any) {
     // this.productId = productId;
      
  }



  


