import brands_$data, {products_$data} from '../js/main.js';
import load_product_$func from './product.js';
let sidebar_$dom = document.querySelector('#brands');
let item_index = 0;

const banner_sliders_move_$obj = {
    bannerBg: 1500,
    profileImg: 128,
    brandName: 288
}
const product_sliders_move_$obj = {
    img: null,
    name: null,
    material: null,
    price: null
}

export default function load_sidebar_sections_$func() {
    for (let data_num = 0; data_num < 5; data_num++) {
        brands_$data.then(data =>{
            sidebar_$dom.innerHTML += (`
                <span class="sidebar-items w-full relative hover:bg-gray-600 hover:bg-opacity-5">
                <img 
                    class="rounded-full z-10 row-1/5 w-16 h-16 mr-5 shadow-md" 
                    src="../assets/images/${data[data_num].name}/${data[data_num].profile_img_src}" 
                    alt="${data[data_num].name}"
                >
                <div class="flex flex-col">
                    <h3 class="ml-3 text-lg font-semibold z-10 h-6 uppercase">${data[data_num].name}</h3>
                    <p class="ml-3 product-length z-10 font-semibold text-opacity-40 text-black"></p>
                </div>
                <span style="transition: .4s;" class="w-0 h-full left-0 absolute z-0 bg-black bg-opacity-5"></span>
                </span>
            `)
        })
        .then(()=>{
            products_$data.then(data=>{
                document.querySelectorAll('.product-length')[data_num].innerHTML=`${data.length} products`
            });

            let sidebar_items_$dom = document.querySelectorAll('.sidebar-items');
            sidebar_items_$dom[data_num].addEventListener('click', function() {
                sidebar_items_$dom[item_index].lastElementChild.classList.remove('sidebar-item-bg');
                this.lastElementChild.classList.add('sidebar-item-bg');

                load_product_$func(data_num);

                document.querySelector("#bannerBg").style.right=(
                    `${banner_sliders_move_$obj.bannerBg * data_num}px`
                )
                document.querySelector("#profileImg").style.right=(
                    `${banner_sliders_move_$obj.profileImg * data_num}px`
                )
                document.querySelector("#brandName").style.right=(
                    `${banner_sliders_move_$obj.brandName * data_num}px`
                )

                item_index=data_num;
            })
        })
    }
}