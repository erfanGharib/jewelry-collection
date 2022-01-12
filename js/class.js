// product and menu buttons
class product_menu_btn_$cls {
    constructor(css_cls, target_elem) {
        this.css_cls=css_cls;
        this.target_elem=target_elem;
    }
    open_target_elem() {
        document.querySelector(this.target_elem).classList.toggle(this.css_cls);
    }
}
export default product_menu_btn_$cls;