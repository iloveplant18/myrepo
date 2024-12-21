'use strict'

let cards = document.querySelectorAll('.card');

updateTotalResult()

document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('filter__checkbox')) return false

    let data = new FormData(document.querySelector('#courses-form'))
    const filterOptions = ['category', 'language', 'price', 'skill-level', 'instructor', 'rating']
    let filters = []
    for (let i of filterOptions) {
        let filter = data.getAll(i)
        if (!filter.length) continue
        filters.push({type: i, value: filter})
    }
    filter(filters)
    updateTotalResult()
})

function updateTotalResult() {
    let cardsQuantity = document.querySelectorAll('.card:not([style*=none])').length
    let container = document.querySelector('#total-results')
    container.textContent = cardsQuantity;
}

function filter(filters) {
    let closures = [];
    for (let {type, value} of filters) {
        value = value.map(i => i.toLowerCase())
        console.log(value)
        switch (type) {
            case 'category':
                closures.push(card =>
                    value.indexOf(card.querySelector('.card__tag').textContent.trim().toLowerCase()) !== -1
                )
                break;
            case 'language':
                closures.push(card =>
                    value.indexOf(card.querySelector('.card__language').textContent.trim().toLowerCase()) !== -1
                )
                break;
            case 'price':
                closures.push(card => {
                    let price = card.querySelector('.card__price').textContent.trim().toLowerCase()
                    if (price === 'free' && value.indexOf('free') !== -1) return true
                    if (price !== 'free' && value.indexOf('paid') !== -1) return true
                    return false
                })
                break;
            case 'instructor':
                closures.push(card =>
                    value.indexOf(card.querySelector('.card__author').textContent.trim().toLowerCase()) !== -1
                )
                break;
            case 'skill-level':
                closures.push(card =>
                    value.indexOf(card.querySelector('.card__skill-level').textContent.trim().toLowerCase()) !== -1
                )
                break;
            case 'rating':
                closures.push(card =>
                    value.indexOf(card.querySelector('.card__mark').textContent.trim()[1]) !== -1
                )
                break;
        }
    }
    renderCards(closures)
}

function renderCards(closures) {
    for (let i of cards) {
        if (isAllClosuresReturnsTrue(closures, i)) {
            show(i);
            continue;
        }
        hide(i);
    }
}

function isAllClosuresReturnsTrue(closures, card) {
    for (let i of closures) {
        if (!i(card)) return false
    }
    return true
}

function show(card) {
    card.style.display = 'grid';
}

function hide(card) {
    card.style.display = 'none'
}