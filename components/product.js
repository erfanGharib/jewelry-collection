import {products_$data} from '../js/main.js';
let product_sections_$dom = document.querySelector('#product-sections');

export default function load_product_$func() {
    for (let data_num = 0; data_num < 4; data_num++) {
        products_$data.then(data =>{
            product_sections_$dom.innerHTML += (`
                <span class="w-full h-24 flex items-center justify-between border-b border-black border-opacity-10">
                <h3 class="text-lg px-3 sm:px-5 font-bold">1</h3>
                <div class="flex items-center w-46 mr-auto">
                    <img 
                        class="border border-black border-opacity-10 w-12 h-12 sm:w-16 sm:h-16" 
                        src="../assets/images/${data[data_num].img_src}" 
                        alt="${data[data_num].name}"
                    >
                    <h3 class="font-bold capitalize sm:text-md text-sm sm:ml-10 ml-3">${data[data_num].name}</h3>
                </div>
    
                <p class="w-1/5 sm:w-1/4 pl-1 text-xs sm:text-sm mr-3">${data[data_num].material}</p>
                
                <div class="flex w-1/4 justify-between items-center">
                    <p class="text-xs sm:text-sm relative ">${data[data_num].price} &euro;</p>
    
                    <div class="flex sm:flex-row items-center justify-center flex-col">
                        <button class="ml-auto">
                            <i class="ico-plus w-7 h-7 block rounded-full mx-2 bg-cover"></i>
                            <button class="hidden">Explore</button>
                            <button class="hidden">Buy</button>
                        </button>
                        
                        <i class="ico-heart block bg-cover w-7 h-7 sm:mt-0 mt-2 mr-0 lg:mr-0 sm:mr-3"></i>
                    </div>
                </div>
                </span>
            `)
        })
    }
}