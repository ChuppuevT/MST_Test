changeContent();
changeMenu();

function changeContent() {
    let imgLinks = [
        'img/img1.png',
        'img/img2.png',
        'img/img3.png',
        'img/img4.png',
        'img/img5.png',
        'img/img6.png',
    ];

    let sidebarLink = document.getElementsByClassName('sidebar-nav__link');
    let contentLink = document.getElementsByClassName('content__item');
    let contentImg = document.getElementsByClassName('slider__img');
    let pageNow = document.getElementById('pages');

    for (let i = 0; i < sidebarLink.length; i++) {
        sidebarLink[i].addEventListener('click', function() {
            for (let i = 0; i < contentImg.length; i++) {
                if (contentImg[i].classList.contains('slider__img_active')) {
                    contentImg[i].classList.remove('slider__img_active');
                }

                if (contentLink[i].classList.contains('content__item_active')) {
                    contentLink[i].classList.remove('content__item_active');
                }

                if (sidebarLink[i].classList.contains('sidebar__active')) {
                    sidebarLink[i].classList.remove('sidebar__active');
                }
            }
            contentImg[i].classList.add('slider__img_active');
            contentLink[i].classList.add('content__item_active');
            sidebarLink[i].classList.add('sidebar__active');
            pageNow.innerHTML = (i + 1) + '/6';
        });
    }
}

function changeMenu() {
    let menuLink = document.getElementsByClassName('header-nav__text');
    let now = 0;
    for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].addEventListener('click', function() {
            for (let i = 0; i < menuLink.length; i++) {
                menuLink[i].classList.remove('header-nav__text_move');
                if (menuLink[i].classList.contains('header-nav__text_active')) {
                    menuLink[i].classList.remove('header-nav__text_active');
                }
            }
            menuLink[i].classList.add('header-nav__text_active');
            now = i;

        });
        menuLink[i].addEventListener('mousemove', function() {
            if (now < i) {
                for (let j = now; j <= i; j++) {
                    menuLink[j].classList.add('header-nav__text_move');
                }
            } else if (now > i) {
                for (let j = now; j >= i; j--) {
                    menuLink[j].classList.add('header-nav__text_move');
                }
            }

        });
        menuLink[i].addEventListener('mouseout', function() {

            if (now < i) {
                for (let j = now; j <= i; j++) {
                    menuLink[j].classList.remove('header-nav__text_move');
                }
            } else if (now > i) {
                for (let j = now; j >= i; j--) {
                    menuLink[j].classList.remove('header-nav__text_move');
                }
            }
        });
    }

}