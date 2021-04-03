'use strict'

window.addEventListener('DOMContentLoaded', function() {

    const translateValue = 100, translateCenterValue = '';

    const logo = document.querySelector('.logo__letter'),
          logoTop = logo.querySelector('.logo__letter__top'),
          logoCenter = logo.querySelector('.logo__letter__center'),
          logoBottom = logo.querySelector('.logo__letter__bottom');

    function logoOpen () {
        logoTop.style.transform = `translateY(-${translateValue}px)`;
        logoCenter.style.transform = `translateX(-${translateValue}px)`;
        logoBottom.style.transform = `translateX(${translateValue}px)`;
    }

    function logoClose () {
        logoTop.style.transform = `translateY(0px)`;
        logoCenter.style.transform = `translateX(0px`;
        logoBottom.style.transform = `translateX(0px)`;
    }

    logo.addEventListener('click', (e) => {

        if (logo.classList.contains('logo__active')) {
            console.log('awdawdaw');
            logoClose();
        } else {
            console.log('sosi')
            logoOpen();
        }

        logo.classList.toggle('logo__active')

    });


}, false);