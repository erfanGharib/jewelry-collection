import { products_$data } from '../js/main.js';
let product_sections_$dom = document.querySelector('#product-sections');
let img_slider = '', name_slider = '', material_slider = '', price_slider = '';
let x;

export default function load_product_$func() {
    products_$data.then(data => {
        for (let product_index = 0; product_index < 3; product_index++) {
            data.forEach((product_obj) => {
                img_slider += `<img
                    class="border min-w-12 border-black border-opacity-10 h-12 sm:min-w-12 sm:h-12" 
                    src="../assets/images/${product_obj[product_index].img_name}" 
                    alt="${product_obj[product_index].name}"
                >`
                name_slider += `<h3 class="min-w-96 mr-auto ml-3 font-bold capitalize sm:text-md text-sm">
                    ${product_obj[product_index].name}
                </h3>`
                material_slider += `<p class="min-w-56 w-56 pl-1 text-xs sm:text-sm">
                    ${product_obj[product_index].material}
                </p>`
                price_slider += `<p class="min-w-16 text-xs sm:text-sm relative">
                    ${product_obj[product_index].price} &euro;
                </p>`

                x=product_index;
            });

            let product_sections_child_$dom = document.createElement('span');
            product_sections_child_$dom.class='';
            product_sections_child_$dom.innerHTML = (`
                <h3 class="text-lg px-3 sm:px-5 font-bold">${x+=1}</h3>

                <div class="overflow-hidden h-12 min-w-12 w-12 mr-auto">
                    <span class="transition-1/5 prdctImg relative right-0 flex h-full">
                        ${img_slider}
                    </span>
                </div>

                <div class="ml-3 overflow-hidden flex items-center w-96 mr-auto">
                    <span class="transition-1/5 prdctName relative right-0 flex">
                        ${name_slider}
                    </span>
                </div>

                <div class="relative overflow-hidden flex items-center w-56 mr-4">
                    <span class="transition-1/5 prdctMaterial relative right-0 flex">
                        ${material_slider}
                    </span>
                </div>                    
        
                <div class="flex w-1/4 justify-between items-center">
                    <div class="overflow-hidden flex items-center w-16 ml-1.5 mr-auto">
                        <span class="transition-1/5 prdctPrice relative right-0 flex">
                            ${price_slider}
                        </span>
                    </div>

                    <div class="flex sm:flex-row items-center justify-center flex-col">
                        <button onclick="this.classList.toggle('plus-btn')" class="plus-btn rounded-full mx-2 h-7 flex">
                            <span style="transition:.3s" class="opacity-100 h-7 py-1 px-2 text-sm bg-gray-200 text-gray-400 hover:text-gray-700">Buy</span>
                            <span style="transition:.3s" class="opacity-100 h-7 py-1 px-2 text-sm bg-black hover:bg-opacity-70 text-white">Explore</span>
                        </button>
            
                        <button class="opacity-50 hover:opacity-100 ico-heart block bg-cover w-7 h-7 sm:mt-0 mt-2 mr-0 lg:mr-0 sm:mr-3"></button>
                    </div>
                </div>
            `)
            product_sections_$dom.appendChild(product_sections_child_$dom);

            // product_sections_$dom.innerHTML += (`
            //     <span class="w-full h-24 flex items-center justify-between border-b border-black border-opacity-10">
            //         <h3 class="text-lg px-3 sm:px-5 font-bold">${x+=1}</h3>

            //         <div class="overflow-hidden h-12 min-w-12 w-12 mr-auto">
            //             <span class="transition-1/5 prdctImg relative right-0 flex h-full">
            //                 ${img_slider}
            //             </span>
            //         </div>

            //         <div class="ml-3 overflow-hidden flex items-center w-96 mr-auto">
            //             <span class="transition-1/5 prdctName relative right-0 flex">
            //                 ${name_slider}
            //             </span>
            //         </div>

            //         <div class="relative overflow-hidden flex items-center w-56 mr-4">
            //             <span class="transition-1/5 prdctMaterial relative right-0 flex">
            //                 ${material_slider}
            //             </span>
            //         </div>                    
            
            //         <div class="flex w-1/4 justify-between items-center">
            //             <div class="overflow-hidden flex items-center w-16 ml-1.5 mr-auto">
            //                 <span class="transition-1/5 prdctPrice relative right-0 flex">
            //                     ${price_slider}
            //                 </span>
            //             </div>

            //             <div class="flex sm:flex-row items-center justify-center flex-col">
            //                 <button onclick="this.classList.toggle('plus-btn')" class="plus-btn rounded-full mx-2 h-7 flex">
            //                     <span style="transition:.3s" class="opacity-100 h-7 py-1 px-2 text-sm bg-gray-200 text-gray-400 hover:text-gray-700">Buy</span>
            //                     <span style="transition:.3s" class="opacity-100 h-7 py-1 px-2 text-sm bg-black hover:bg-opacity-70 text-white">Explore</span>
            //                 </button>
                
            //                 <button class="opacity-50 hover:opacity-100 ico-heart block bg-cover w-7 h-7 sm:mt-0 mt-2 mr-0 lg:mr-0 sm:mr-3"></button>
            //             </div>
            //         </div>
            //     </span>
            // `)

            img_slider = '';
            name_slider = '';
            material_slider = '';
            price_slider = '';
        }
    })
}