"use strict";
import product_menu_btn_$cls from './class.js';

document.querySelector('#products-btn').addEventListener('click', ()=>{
    new product_menu_btn_$cls(
        'product-preview',
        '#products'
    ).open_target_elem()
});
document.querySelectorAll(".ico-menu").forEach(value => {
    value.addEventListener('click', ()=>{
        new product_menu_btn_$cls(
            'translate-x-full',
            '#sidebar'
        ).open_target_elem()
    });
});