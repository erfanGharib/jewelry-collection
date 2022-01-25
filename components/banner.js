import brands_$data from '../js/main.js';
let banner_$dom = document.querySelector('#banner');
let bg_img_slider='', title_slider='', profile_img_slider='', brand_info='';

export default function load_banner_$func() {
    brands_$data.then((data)=>{
        data.forEach((value, index) => {
            bg_img_slider+=`<div class="${data[index].name}-banner bg-cover h-full w-full min-w-1500"></div>`;

            title_slider+=`<h1 class="text-5xl min-w-72 font-semibold uppercase">${data[index].name}</h1>`;

            profile_img_slider+=`<img 
                class="rounded-full min-w-32 h-32" 
                src="../assets/images/${data[index].name}/${data[index].profile_img_src}"
                alt="${data[index].name}"
            >`;

            brand_info+=`<p class="brand-info transition-1/5 absolute opacity-0 top-0 left-0">${data[index].info}</p>`
        });

        banner_$dom.innerHTML+=(`
            <span class="absolute w-full h-full z-1- left-0 top-0 overflow-hidden">
                <span id="bannerBg" class="transition-1/5 relative right-0 flex items-center h-full">
                    ${bg_img_slider}
                </span>
            </span>

            <div id="brand-profile" class="flex w-full sm:flex-row items-center sm:text-left text-center flex-col m-auto sm:m-0 sm:mt-auto relative">
                <span class="relative right-0 min-w-32 mt-5 w-32 h-32 rounded-full shadow-md mb-10 block mr-7 overflow-hidden">
                    <span id="profileImg" class="transition-1/5 flex items-start relative right-0">${profile_img_slider}</span>
                </span>

                <a href="#" class="text-sm absolute -bottom-10 sm:bottom-0 sm:left-10 hover:underline opacity-90">+ Follow</a>
                <div class="w-2/5">
                    <span class="w-72 block overflow-hidden">
                        <span id="brandName" class="transition-1/5 relative right-0 flex items-center">${title_slider}</span>
                    </span>
                    
                    <span class="sm:w-4/5 mt-6 h-22 block opacity-80 relative text-sm">
                        ${brand_info}
                    </span>
                </div>
            </div>
        `)

        document.querySelectorAll('.brand-info')[0].classList.remove('opacity-0');
    })
}