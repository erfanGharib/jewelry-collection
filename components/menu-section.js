import brands_$data, {products_$data} from '../js/main.js';
let sidebar_$dom = document.querySelector('#brands');
let sidebar_item_index = 0;

const banner_sliders_move_$obj = [
    {id: 'bannerBg', move: 1500,},
    {id: 'profileImg', move: 128,},
    {id: 'brandName', move: 288,}
]
const product_sliders_move_$obj = [
    {id: 'prdctImg', move: 3,},
    {id: 'prdctName', move: 24,},
    {id: 'prdctMaterial', move: 14,},
    {id: 'prdctPrice', move: 4,}
]

export default function load_sidebar_sections_$func() {
    brands_$data.then(data =>{
        data.forEach((value, data_num) => {
            // load all sidebar items
            const sidebar_childs = document.createElement('span');
            sidebar_childs.classList.add(
                'sidebar-items', 'w-full', 'relative', 
                'hover:bg-gray-600', 'hover:bg-opacity-5'
            )
            sidebar_childs.innerHTML = (`
                <img 
                    class="rounded-full z-10 row-1/5 w-16 h-16 mr-5 shadow-md" 
                    src="../assets/images/${value.name}/${value.profile_img_src}" 
                    alt="${value.name}"
                >
                <div class="flex flex-col">
                    <h3 class="ml-3 text-lg font-semibold z-10 h-6 uppercase">${value.name}</h3>
                    <p class="ml-3 product-length z-10 font-semibold text-opacity-40 text-black"></p>
                </div>
                <span style="transition: .4s;" class="w-0 h-full left-0 absolute z-0 bg-black bg-opacity-5"></span>
            `)
            sidebar_$dom.appendChild(sidebar_childs);

            // get each brand product length
            products_$data.then(data=>{
                document.querySelectorAll('.product-length')[data_num].innerHTML=(
                    `${data[data_num].length} products`
                )
            });
        })
        
        for (let index=0; index<data.length; index++) {
            let sidebar_items_$dom = document.querySelectorAll('.sidebar-items');
            sidebar_items_$dom[sidebar_item_index].lastElementChild.classList.add('sidebar-item-bg');

            sidebar_items_$dom[index].addEventListener('click', function() {
                // add / remove sidebar items background *********************
                sidebar_items_$dom[sidebar_item_index].lastElementChild.classList.remove('sidebar-item-bg');
                this.lastElementChild.classList.add('sidebar-item-bg');
                
                // change banner *********************************************
                banner_sliders_move_$obj.forEach((value)=>{
                    document.querySelector(`#${value.id}`).style.right=(
                        `${value.move * index}px`
                    )
                })
                document.querySelectorAll('.brand-info')[sidebar_item_index].classList.add('opacity-0');
                document.querySelectorAll('.brand-info')[index].classList.remove('opacity-0');

                // change product *********************************************
                for (let index_ = 0; index_ < 3; index_++) {
                    product_sliders_move_$obj.forEach((value)=>{
                        document.querySelectorAll(`.${value.id}`)[index_].style.right=(
                            `${value.move * index}rem`
                        )
                    })
                }

                // put last sidebar-item index in variable ********************
                sidebar_item_index=index;
            })
        }
    })
}