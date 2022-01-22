import brands_$data from '../js/main.js';
let banner_$dom = document.querySelector('#banner');
let bg_img_slider, title_slider, profile_img_slider;

export function load_banner_$func() {
    brands_$data.then((data)=>{
        data.forEach((value, index) => {
            bg_img_slider+=`<img 
                class="w-full h-full" 
                src="${data[index].banner_img_src}" 
                alt="${data[index].name}"
            >`;
            title_slider+=`<h1 class="text-5xl w-40 font-semibold uppercase">${data[index].name}</h1>`;
            profile_img_slider+=`<h1 class="text-5xl w-40 font-semibold uppercase">${data[index].name}</h1>`;

            banner_$dom.innerHTML=(`
                <span class="absolute w-full h-full z-1-">${bg_img_slider}</span>

                <div id="brand-profile" class="flex w-full sm:flex-row items-center sm:text-left text-center flex-col m-auto sm:m-0 sm:mt-auto relative">
                    <a href="#" class="text-sm absolute -bottom-10 sm:bottom-0 sm:left-10 hover:underline mt-6 opacity-90">+ Follow</a>
                    <div>
                        <span class="w-40 block">
                            <span class="flex items-center">${title_slider}</span>
                        </span>
                        
                        <p class="sm:w-1/2 mt-6 text-sm opacity-80">
                            Sunt est ex elit sunt eiusmod cillum qui officia. Proident labore anim non ut exercitation id mollit. Et amet aliquip cupidatat ad elit adipisicing ea irure.
                            Veniam deserunt quis cupidatat sunt
                        </p>
                    </div>
                </div>
            `)
        });
    })
}