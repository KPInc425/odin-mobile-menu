import { hideElementOnFlexWrap, mobileMenu } from './mobileMenu.js';

const app = (() => {
    console.log("TESTING: KPINC425");

    const headerContainer = document.querySelector('.mobileMenu');

    headerContainer.innterHTML = "";

    const displayedMenu = mobileMenu();
    console.log(displayedMenu);

    headerContainer.appendChild(displayedMenu);

    hideElementOnFlexWrap();

})();

