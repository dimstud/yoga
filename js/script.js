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

    let deadline = '2020-10-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            // hours = Math.floor((t/1000/60/60) % 24);
            // days = Math.floor( (t/(1000*60*60*24)) );

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return'0' + num;
        } else {
            return num;
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);
});