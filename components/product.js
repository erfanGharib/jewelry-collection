import {products_$data} from '../js/main.js';
let product_sections_$dom = document.querySelector('#product-sections');

export default function load_product_$func(data_num) {
    products_$data.then(data =>{
        data[data_num].forEach((product_obj, product_index) => {
            product_sections_$dom.innerHTML += (`
                <span class="w-full h-24 flex items-center justify-between border-b border-black border-opacity-10">
                <h3 class="text-lg px-3 sm:px-5 font-bold">${data_num+=1}</h3>
                <div class="flex items-center w-46 mr-auto">
                    <img 
                        class="border border-black border-opacity-10 w-12 h-12 sm:w-16 sm:h-16" 
                        src="../assets/images/${data[data_num][product_index].base_url}${data[data_num][product_index].img_name}" 
                        alt="${data[data_num][product_index].name}"
                    >
                    <h3 class="font-bold capitalize sm:text-md text-sm sm:ml-10 ml-3">${data[data_num][product_index].name}</h3>
                </div>
    
                <p class="w-1/5 sm:w-1/4 pl-1 text-xs sm:text-sm mr-3">${data[data_num][product_index].material}</p>
                
                <div class="flex w-1/4 justify-between items-center">
                    <p class="text-xs sm:text-sm relative ">${data[data_num][product_index].price} &euro;</p>
    
                    <div class="flex sm:flex-row items-center justify-center flex-col">
                        <button onclick="this.classList.toggle('plus-btn')" class="plus-btn rounded-full mx-2 h-7 flex">
                            <span style="transition:.3s" class="opacity-100 h-7 py-1 px-2 text-sm bg-gray-200 text-gray-400 hover:text-gray-700">Buy</span>
                            <span style="transition:.3s" class="opacity-100 h-7 py-1 px-2 text-sm bg-black hover:bg-opacity-70 text-white">Explore</span>
                        </button>
                        
                        <button class="opacity-50 hover:opacity-100 ico-heart block bg-cover w-7 h-7 sm:mt-0 mt-2 mr-0 lg:mr-0 sm:mr-3"></button>
                    </div>
                </div>
                </span>
            `)
        });
    })
}