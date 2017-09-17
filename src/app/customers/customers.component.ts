import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { $ } from 'protractor';
import { Customers } from '../products/model';

@Component({
  selector: 'app-customers',
  moduleId : module.id,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent{
  
 @Input() productId : number;
selectedCustomer : Customers;
selectCustomerId : number;
//customers : Customers;


  customers:any[] = [{
              
              productId:'0',
              customerId: '1',
              customerName:'Pradeep'
            },{
              productId:'1',
              customerId:'2',
              customerName:'Vamsi'
            },{
              
              productId:'2',
              customerId: '3',
              customerName:'Sandeep'

            }];
            
           /* constructor(private Customers:Customers){
              
                      this.customers=[]; 
                  }
            
            fetchData(productId : any) {
              
                      this.fetchData(productId)
                      .then( 
                          data => {
                              this.productId = data;
                          });
                  }
            
    ngOnInit(){
      this.fetchData(this.productId);
  }

            
                @Input ()
            
                set Id(prodcutId:any) {
                this.Id = this.productId;
                this.fetchData(this.productId);

          
              }
              
                  get Id() {
                  return this.productId;
              }
      

    


/*   onClick() {
      this.emitData.emit('Hello from the Customers');
      } */

    /*   @Input() productId;
       customers;
       selectedCustomerId;
       constructor(private ) { }
       ngOnInit() {
           this.customers = this.apiService.getCustomers(+this.productId);
           console.log(this.customers);
       }*/
       /* title:string = 'Child Component';
  
 @Input() customerData:any;
 @Output() emitData: EventEmitter<Customers>;

 constructor(){
   this.emitData = new EventEmitter<Customers>();
 } */

     
             

}