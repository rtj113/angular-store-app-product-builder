export interface Product {
  id: number;
  product_type: string;
  product_type_category: string;
  set_number: number;
  set_end_number: number;
  set: string;
  year: number;
  card_brand: string;
  card_name: string;
  rarity: string;
  special: string;
  graded: string;
  graded_quality: number;
  graded_unique_number: number;
  investment: number;
  profit_potential: number;
  ebay_sold_hi: number;
  ebay_sold_low: number;
}
// Should be card products longer term.?
export const products = [
  {
    id: 1,
    product_type: 'Collectible',
    product_type_category: 'Trading Card',
    set_number: 1,
    set_end_number: 102,
    set: 'Base Set',
    year: 1999,
    card_brand: 'Pokemon',
    card_name: 'Alakazam',
    rarity: 'Holo Rare',
    special: '',
    graded: 'PSA',
    graded_quality: 8,
    graded_unique_number: 27660508,
    investment: 20.33,
    profit_potential: 130.67,
    ebay_sold_hi: 200,
    ebay_sold_low: 151,
  },
  {
    id: 2,
    product_type: 'Collectible',
    product_type_category: 'Trading Card',
    set_number: 4,
    set_end_number: 102,
    set: 'Base Set',
    year: 1999,
    card_brand: 'Pokemon',
    card_name: 'Charizard',
    rarity: 'Holo Rare',
    special: '',
    graded: 'PSA',
    graded_quality: 8,
    graded_unique_number: 27660508,
    investment: 20.33,
    profit_potential: 130.67,
    ebay_sold_hi: 200,
    ebay_sold_low: 151,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
