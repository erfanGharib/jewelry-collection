"use strict";
import product_menu_btn_$cls from './class.js';
import load_sidebar_sections_$func from '../components/menu-section.js';
// import load_product_$func from '../components/product.js';
import load_banner_$func from '../components/banner.js';
import load_product_$func from '../components/product.js';

// load json data and convert to json
const brands_$data = fetch('../data/brands.json').then(res => res.json());
const products_$data = fetch('../data/products.json').then(res => res.json());

document.body.onload=async ()=>{
    await load_product_$func();
    await load_banner_$func();
    await load_sidebar_sections_$func();

    // set sidebar and product button event listener
    document.querySelector('#products-btn').addEventListener('click', ()=> {
        new product_menu_btn_$cls(
            'product-preview',
            '#products'
        ).open_target_elem()
    });
    document.querySelector(".ico-menu").addEventListener('click', ()=> {
        new product_menu_btn_$cls(
            'translate-x-full',
            '#sidebar'
        ).open_target_elem()
    });
}

// export json data
export default brands_$data;
export { products_$data, }