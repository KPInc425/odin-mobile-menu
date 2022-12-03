import './reset.css';
import styles from  './style.css';

import { changeElementOnFlexWrap, el_dropDownMenu, mobileMenu } from './mobileMenu.js';

console.log(styles);

const app = (() => {
    console.log("TESTING: KPINC425");


    const headerContainer = document.querySelector('.mobileMenu');

    headerContainer.innterHTML = "";

    const displayedMenu = mobileMenu();
    console.log(displayedMenu);

    headerContainer.appendChild(displayedMenu);
    el_dropDownMenu();

    changeElementOnFlexWrap();

})();

