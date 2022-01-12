import brands_$data, {products_$data} from '../js/main.js';
let sidebar_$dom = document.querySelector('#brands');

export default function load_sidebar_sections_$func() {
    for (let data_num = 0; data_num < 5; data_num++) {
        brands_$data.then(data =>{
            sidebar_$dom.innerHTML += (`
                <span class="sidebar-items w-full">
                <img 
                    class="rounded-full row-1/5 w-16 h-16 mr-5 shadow-md" 
                    src="../assets/images/${data[data_num].profile_img_src}" 
                    alt="${data[data_num].name}"
                >
                <h3 class="text-lg font-semibold h-6 uppercase mt-2">${data[data_num].name}</h3>
                <p class="product-length font-semibold text-opacity-40 text-black"></p>
                </span>
            `)
        })
        .then(()=>{
            products_$data.then(data=>{
                document.querySelectorAll('.product-length')[data_num].innerHTML=`${data.length} products`
            })
        })
    }
}