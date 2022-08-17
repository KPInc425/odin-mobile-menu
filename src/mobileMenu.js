
// import './style.css' assert { type: 'css' };
const src = '../src/media/iLG(pricedown)128px.png';


const el_dropDownMenu = () => {
    const moreMenuContainer = document.querySelector('.moreTabContainer');
    console.log(moreMenuContainer)

    moreMenuContainer.addEventListener('click', () => {
        console.log('clicked More Menu');
        const moreMenuItems = moreMenuContainer.querySelectorAll('.moreMenuItem');
        console.log(moreMenuItems);
        moreMenuItems.forEach((item) => {

            if (item.classList.contains('moreTabHidden')) {
                item.classList.remove('moreTabHidden');
            } else {
                item.classList.add('moreTabHidden');
            }
        })

    })

}

function mobileMenu() {
    const mobileMenuContainer = document.createElement('nav');
    mobileMenuContainer.classList.add('flexContainer');

    const moreTabcontainer = document.createElement('div');
    moreTabcontainer.classList.add('moreTabContainer');
    moreTabcontainer.classList.add('moreTabHidden');
    // moreTabcontainer.classList.add('menuItem');

    // Make this dynamic, recieve total menuitems from outside
    // Wrap everything with a flex container

    const containerShownTabs = document.createElement('div');
    containerShownTabs.classList.add('containerShownTabs');
    containerShownTabs.classList.add('flexContainer');
    
    const menuLogo = document.createElement('img');
    menuLogo.setAttribute('src', src);
    menuLogo.setAttribute('alt', "iLG Menu Logo");
    menuLogo.classList.add("menuLogo");
    // menuLogo.classList.add("menuItem");
    menuLogo.style.width = "54px";
    menuLogo.style.maxHeight = "54px";


    
    const homeMenuItem = document.createElement('a');
    homeMenuItem.setAttribute('href', '#')
    homeMenuItem.classList.add('menuItem');
    homeMenuItem.textContent = "Home";

    const menuItem1 = document.createElement('a');
    menuItem1.setAttribute('href', '#')
    menuItem1.classList.add('menuItem');
    menuItem1.textContent = "Page2";

    const menuItem2 = document.createElement('a');
    menuItem2.setAttribute('href', '#')
    menuItem2.classList.add('menuItem');
    menuItem2.textContent = "Page3";

    const menuItem3 = document.createElement('a');
    menuItem3.setAttribute('href', '#')
    menuItem3.classList.add('menuItem');
    menuItem3.textContent = "Page4";

    const menuItem4 = document.createElement('a');
    menuItem4.setAttribute('href', '#')
    menuItem4.classList.add('menuItem');
    menuItem4.textContent = "Page5";

    const menuItemMore = document.createElement('a');
    menuItemMore.setAttribute('href', '#')
    menuItemMore.classList.add('moreMenu');
    menuItemMore.textContent = "More";

    mobileMenuContainer.appendChild(menuLogo);
    containerShownTabs.appendChild(homeMenuItem);
    containerShownTabs.appendChild(menuItem1);
    containerShownTabs.appendChild(menuItem2);
    containerShownTabs.appendChild(menuItem3);
    containerShownTabs.appendChild(menuItem4);
    mobileMenuContainer.appendChild(containerShownTabs)
    moreTabcontainer.appendChild(menuItemMore)
    mobileMenuContainer.appendChild(moreTabcontainer);

    return mobileMenuContainer;
}

const changeElementOnFlexWrap = () => {
    let contentContainer = document.getElementById('content');
    let moreTabContainer = document.querySelector('.moreTabContainer');
    let shownTabContainer = document.querySelector('.containerShownTabs');
    let windowWidth = document.querySelector('.windowWidth');
    let windowHeight = document.querySelector('.windowHeight');
    let maxWidth;
    let changeWidth = maxWidth = 1005;
    let lastMenuItem;
    let lastMoreMenuItem;
    window.addEventListener('resize', (e) => {
        // lastMenuItem = document.querySelector('.menuItem:last-of-type');
        // console.log(lastMenuItem);
        // TESTING
        windowWidth.textContent = `Width: ${window.innerWidth}`;
        windowHeight.textContent = `Height: ${window.innerHeight}`;
        // console.log(`Height: ${window.innerHeight}`);
        // console.log(`Width: ${window.innerWidth}`);
        // TESTING

        if (window.innerWidth < changeWidth) {
            console.log(`smaller than ${changeWidth}`);
            lastMenuItem = document.querySelector('.menuItem:last-of-type');
            if (lastMenuItem === null) {
                // Now do it in reverse
                console.log('no more items');
                return 0;
            } else {
                changeWidth -= 150;
                console.log(changeWidth);
                console.log(lastMenuItem);
                lastMenuItem.classList.remove('menuItem');
                lastMenuItem.remove();
                lastMenuItem.classList.add('moreMenuItem')
                lastMenuItem.classList.add('moreTabHidden');
                moreTabContainer.appendChild(lastMenuItem);
                moreTabContainer.classList.remove('moreTabHidden');
            }
        }
        
        if (window.innerWidth > (changeWidth + 150)) {
            console.log(`Larger than ${changeWidth}`);
            lastMoreMenuItem = document.querySelector('.moreMenuItem:last-of-type');
            if (lastMoreMenuItem === null) {
                console.log('no more More Items');
                return 0;
            } else {

                changeWidth += 150;
                console.log(lastMoreMenuItem);
                lastMoreMenuItem.classList.remove('moreMenuItem');
                lastMoreMenuItem.classList.remove('moreTabHidden');
                lastMoreMenuItem.classList.add('menuItem');
                shownTabContainer.appendChild(lastMoreMenuItem);

                if (window.innerWidth > maxWidth) {
                    moreTabContainer.classList.add('moreTabHidden');
                }
            }


        }
    })
    // TESTING
    contentContainer.appendChild(windowWidth);
    contentContainer.appendChild(windowHeight);
    // TESTING

}

export {
    mobileMenu,
    changeElementOnFlexWrap,
    el_dropDownMenu,
}