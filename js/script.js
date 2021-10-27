changeContent();
changeMenu();

/* Лучше использовать стрелочные функции, так как это более новый
стандарт который более лаконично смотрится в коде. Но и при этом сделаю
небольшой гайд что стоит учитывать при их использовании.
В fucntion() this ключевое слово привязано к различным значениям,
основанным на контексте, в котором он вызывается.
В стрелочных функциях this используется из кода, содержащего функцию стрелки.
Вот даже хорошая статья для понимания : https://medium.com/@KucherDev/%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%B8-%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D1%81%D1%82%D0%BE%D0%B8%D1%82-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-es6-3135a973490b
*/
function changeContent() {
    // Неиспользуемая переменная
    let imgLinks = [
        'img/img1.png',
        'img/img2.png',
        'img/img3.png',
        'img/img4.png',
        'img/img5.png',
        'img/img6.png',
    ];

    // document.querySelector(), чаще для всего используют, но это не кретично, просто наблюдение
    const sidebarLink = document.getElementsByClassName('sidebar-nav__link');
    const contentLink = document.getElementsByClassName('content__item');
    const contentImg = document.getElementsByClassName('slider__img');
    const pageNow = document.getElementById('pages');

    // лучше будет использовать foreEach(), так как он будет иметь первый аргументом массива, и дальнейшем это проще для типизации
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