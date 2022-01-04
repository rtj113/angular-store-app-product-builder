import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-builder',
  templateUrl: './product-builder.component.html',
  styleUrls: ['./product-builder.component.css']
})

export class ProductBuilderComponent {
  productForm = this.fb.group({
    product_filter: this.fb.group({
      product_type: ['', Validators.required ],
      product_type_category: ['', Validators.required ],
    }),
    product_info: this.fb.group({
      set_number: ['', Validators.required],
      set_end_number: ['', Validators.required],
      set: ['', Validators.required],
      year:['', Validators.required],
      card_brand: ['', Validators.required],
      card_name: ['', Validators.required],
      rarity: ['', Validators.required],
      special: [''],
      graded: [''],
      graded_quality: [''],
      graded_unique_number: [''],
      investment: ['', Validators.required],
      profit_potential: [''],
      ebay_sold_hi: [''],
      ebay_sold_low: ['']
    }),
  })

  constructor(private fb: FormBuilder) { }

  onSubmit(){
    console.warn(this.productForm.value);
  }

  updateProduct() {
    this.productForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}
