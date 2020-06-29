// Подключене обработчика событий на всю страницу
window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    // Подключаем все менюшки
    let tab = document.querySelectorAll('.info-header-tab'),
    // Подключаем родителя менюшек
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
// Запускаем функцию скрывающую все окна кроме первой которая прописана в аргументе а
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    // Первое окно будет всегда показываться
    hideTabContent(1);

    // Запускаем функцию показывающую все окна 
    function showTabContent(b) {
        // Если элемент скрыт
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // Timer

    let deadLine = '2020-10-21';

    function getTimeRemaining(endtim) {
        let t = Date.parse(endtim) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            // hours = Math.floor((t/1000/60/60) % 24),
            // days = Math.floor((t/(1000*60*60*24)));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

});