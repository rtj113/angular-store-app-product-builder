import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrls: ['./product-builder.component.css']
})
export class ProductBuilderComponent {
  productForm = new FormGroup({
    product_type: new FormControl(''),
    product_type_category: new FormControl(''),
    product_info: new FormGroup ({
      set_number: new FormControl(''),
      set_end_number: new FormControl(''),
      set: new FormControl(''),
      year: new FormControl(''),
      card_brand: new FormControl(''),
      card_name: new FormControl(''),
      rarity: new FormControl(''),
      special: new FormControl(''),
      graded: new FormControl(''),
      graded_quality: new FormControl(''),
      graded_unique_number: new FormControl(''),
      investment: new FormControl(''),
      profit_potential: new FormControl(''),
      ebay_sold_hi: new FormControl(''),
      ebay_sold_low: new FormControl('')
    }),
  })

  constructor() { }

  onSubmit(){
    console.warn(this.productForm.value);
  }

  // updateProfile() {
  //   this.productForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street'
  //     }
  //   });
  // }

}
