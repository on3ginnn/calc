document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('click', clickEvent);

    // символы
    const chars = {
        '_seven': '7',
        '_eight': '8',
        '_nine': '9',
        '_four': '4',
        '_five': '5',
        '_six': '6',
        '_one': '1',
        '_two': '2',
        '_free': '3',
        '_zero': '0',
        '_plus': '+',
        '_minus': '-',
        '_multiply': '*',
        '_division': '/',
    }

    // табло для примера
    const tablet = document.querySelector('.tablet div');

    // получаемый пример
    let eq = '';

    // вывод на экран результата
    function showTablet(){

        // проверка на то, что поле всегда что то содержит
        (!eq) ? eq = '0' : (eq === 'Infinity') ? eq = 'ERROR' : eq;

        tablet.innerHTML = eq;

        // // масштабирование размера на табло
        // (!tablet.classList.contains('font_size48px') && tablet.clientWidth >= 320) ? tablet.classList.add('font_size48px') : 
        //     (tablet.classList.contains('font_size48px') && tablet.clientWidth >= 320) ? tablet.classList.add('font_size36px') : tablet;

        // (tablet.classList.contains('font_size36px') && tablet.clientWidth < 240) ? tablet.classList.remove('font_size36px') : 
        //     (tablet.classList.contains('font_size48px') && tablet.clientWidth < 240) ? tablet.classList.remove('font_size48px') : tablet;

    }

    // функция равно
    function _eq(value) {
        return eval(value);
    }

    // событие клика
    function clickEvent(event) {

        // исключение ошибки
        (eq === 'ERROR') ? eq = '0' : eq;

        // цифры
        if (event.target.closest('.key_digit')) {
            (eq === '0') ? eq = '' : eq;
            // список классов нажатой клавиши

            let digitKey = event.target.closest('.key_digit').classList;
            
            // последнее имя класса
            let digitKeyChar = digitKey[digitKey.length - 1];
            
            // символ в константе
            resChar = chars[digitKeyChar];

            // добавляем символ в пример
            eq += resChar;
        }
        // отчистка экрана
        if (event.target.closest('.key_delete')){
            eq = '0';
        }
        // удаление одного последнего сивола
        if (event.target.closest('._backcspace')) {
   
            eq = (eq + '').slice(0, eq.length - 1);
        }
        // плюс
        if (event.target.closest('._plus')) {
            
            let opKey = event.target.closest('._plus').classList;

            let opKeyChar = opKey[opKey.length - 1];
            resChar = chars[opKeyChar] + '';

            eq += resChar;
        }
        // минус
        if (event.target.closest('._minus')) {
            
            let opKey = event.target.closest('._minus').classList;

            let opKeyChar = opKey[opKey.length - 1];
            resChar = chars[opKeyChar] + '';

            eq += resChar;
        }
        // умножение
        if (event.target.closest('._multiply')) {
            // список классов нажатой клавиши
            let opKey = event.target.closest('._multiply').classList;

            // последнее имя класса
            let opKeyChar = opKey[opKey.length - 1];
            
            // символ в константе
            resChar = chars[opKeyChar];

            // добавляем символ в пример
            eq += resChar;
        }
        // деление
        if (event.target.closest('._division')) {
            
            let opKey = event.target.closest('._division').classList;

            let opKeyChar = opKey[opKey.length - 1];
            resChar = chars[opKeyChar] + '';

            eq += resChar;
        }
        // равно
        if (event.target.closest('._eq')) {
            eq = _eq(eq) + '';
        }

        // вывод примера на табло
        showTablet();           
    }
});