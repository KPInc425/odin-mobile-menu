import { changeElementOnFlexWrap, el_dropDownMenu, mobileMenu } from './mobileMenu.js';
// import resetStyles from '../src/reset.css' assert { type: 'css' };
// import styles from '../src/style.css' assert { type: 'css' };
// console.log(styles);
// document.adoptedStyleSheets = [resetStyles];
// document.adoptedStyleSheets = [styles];

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

