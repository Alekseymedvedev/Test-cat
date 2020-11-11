// бургер меню - активная\не активная кнопка, активное\не активное меню

let headerBtn = document.querySelector('.header__btn');
let headerMenu = document.querySelector('.header__menu');


headerBtn.onclick = function () {
    headerBtn.classList.toggle('header__btn-active');
    headerMenu.classList.toggle('header__menu-active');
}



// скролл по клику кнопки наверх

const offset = 100;
const arrowBtn = document.querySelector('.arrow');
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// проверка на возможность скролла

window.addEventListener('scroll', () => {
    if (getTop() > offset) {
        arrowBtn.classList.add('arrow-active');
    } else {
        arrowBtn.classList.remove('arrow-active');
    }
})

// плавный скролл

arrowBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})




// выбор карточки по цене\возрасту

document.querySelector('.card__sort-price').onclick = function () {
    sortList('data-price');
}
document.querySelector('.card__sort-age').onclick = function () {
    sortListDesc('data-age');
}


// перебираем массив, получаем значение дата-атрибута, если меньшее подставляем в начало

function sortList() {
    let items = document.querySelector('.card__wrapper');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute('data-price') > +items.children[j].getAttribute('data-price')) {
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

// перебираем массив, получаем значение дата-атрибута, если меньшее подставляем в начало

function sortListDesc() {
    let items = document.querySelector('.card__wrapper');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute('data-age') < +items.children[j].getAttribute('data-age')) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


// показываем дополнительные карточки при клике на кнопку "показать еще 20"

const cardBtn = document.querySelector('.card__btn');
const cardItemOff = document.querySelectorAll('.card__item--off');

cardBtn.onclick = function () {

    cardItemOff.forEach(function(item){
        
        item.classList.remove('card__item--off');
    });

    cardBtn.remove();
}



// при клике на иконку добавляем карточки в избранное



let cardLikeOff = document.querySelectorAll('.card__like--fill');

cardLikeOff.forEach((item) => {
    item.addEventListener('click', function() {
        item.classList.toggle('card__like--fill');
        alert('добавлено в избраное');
    });
  });
