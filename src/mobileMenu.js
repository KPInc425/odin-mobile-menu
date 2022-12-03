
// import './style.css' assert { type: 'css' };
const src = '../src/media/iLG(pricedown)128px.png';


const el_dropDownMenu = () => {
    const moreMenuContainer = document.querySelector('.moreTabContainer');
    console.log(moreMenuContainer)

    moreMenuContainer.addEventListener('click', () => {
        let previousHeight = 0;
        // Get ref to MoreMenuItems
        const moreMenuItems = moreMenuContainer.querySelectorAll('.moreMenuItem');
        // Increment through each item and remove hidden tags and set dynamic top position
        moreMenuItems.forEach((item) => {
            if (item.classList.contains('moreTabHidden')) {
                item.classList.remove('moreTabHidden');
                // Dynamically set top position based of previous top position
                let newTop = item.offsetHeight + previousHeight;
                item.style.top = newTop + 'px';
                previousHeight = newTop;
            } else {
                item.classList.add('moreTabHidden');
            }
        })

    })

}

function mobileMenu() {
    const mobileMenuContainer = document.createElement('nav');
    mobileMenuContainer.classList.add('flexContainer');

    const moreTabContainer = document.createElement('div');
    moreTabContainer.classList.add('moreTabContainer');
    moreTabContainer.classList.add('moreTabHidden');

    // Make this dynamic, recieve total menuitems from outside
    // Wrap everything with a flex container

    const containerShownTabs = document.createElement('div');
    containerShownTabs.classList.add('containerShownTabs');
    containerShownTabs.classList.add('flexContainer');
    
    const menuLogo = document.createElement('img');
    menuLogo.setAttribute('src', src);
    menuLogo.setAttribute('alt', "iLG Menu Logo");
    menuLogo.classList.add("menuLogo");
    
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
    moreTabContainer.appendChild(menuItemMore);
    mobileMenuContainer.appendChild(moreTabContainer);

    return mobileMenuContainer;
}

const changeElementOnFlexWrap = () => {
    let contentContainer = document.getElementById('content');
    let moreTabContainer = document.querySelector('.moreTabContainer');
    let shownTabContainer = document.querySelector('.containerShownTabs');
    let windowWidth = document.querySelector('.windowWidth');
    let windowHeight = document.querySelector('.windowHeight');
    let maxWidth;
    // const itemWidth = document.querySelector('.menuItem').offsetWidth;
    let changeWidth = maxWidth = 1005;
    let lastMenuItem;
    let lastMoreMenuItem;


    const adjustMenu = () => {
        windowWidth.textContent = `Width: ${window.outerWidth}`;
        windowHeight.textContent = `Height: ${window.innerHeight}`;

        // check if window width changed by smaller amount than tab/button size (here 150)


        if (window.outerWidth < changeWidth) {
            console.log(`smaller than ${changeWidth}`);
            

            const removeMenuItem = () => {
                lastMenuItem = document.querySelector('.menuItem:last-of-type');
                lastMenuItem.classList.remove('menuItem');
                lastMenuItem.remove();
                lastMenuItem.classList.add('moreMenuItem')

                lastMenuItem.classList.add('moreTabHidden');
                moreTabContainer.appendChild(lastMenuItem);
                // Dynamically show more menu when it becomes populated
                moreTabContainer.classList.remove('moreTabHidden');
            }


            // Prevent changes if there are no more menu items show
            if (lastMenuItem === null) {
                return 0;
            } else {
                console.log(((changeWidth - window.outerWidth) / 150).toFixed(0));
                let loops = ((changeWidth - window.outerWidth) / 150).toFixed(0);
                if (loops > 0) {
                    for (let i = 0; i < loops; i++) {
                        changeWidth -= 150;
                        removeMenuItem();
                        console.log(changeWidth);
                    }
                }

            }
        }
        
        // check if window width changed by larger amount than tab/button size (here 150)
        if (window.outerWidth > (changeWidth + 150)) {
            // console.log(`Larger than ${changeWidth}`);
            lastMoreMenuItem = document.querySelector('.moreMenuItem:last-of-type');

            const removeMoreMenuItem = () => {
                // Remove moreMenu classes > add shownMenu MenuItem class > add tab back into shownTabsContainer 
                lastMoreMenuItem.classList.remove('moreMenuItem');
                lastMoreMenuItem.classList.remove('moreTabHidden');
                lastMoreMenuItem.classList.add('menuItem');
                shownTabContainer.appendChild(lastMoreMenuItem);

                // Dynamically remove moreMenu based on menu's maxWidth
                if (window.outerWidth > maxWidth) {
                    moreTabContainer.classList.add('moreTabHidden');
                }
            }

            // Prevent changes if there are no more hidden menu items to show
            if (lastMoreMenuItem === null) {
                return 0;
            } else {
                // set new changeWidth by size of tab/button element
                changeWidth += 150; // change this to itemWidth 
                removeMoreMenuItem();
            }


        }
    }

    window.addEventListener('resize', adjustMenu); 
    window.onload = adjustMenu;

    // alert(window.onload);
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