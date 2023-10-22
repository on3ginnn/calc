document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('click', clickEvent);

    // символы
    const chars = {
        '_seven': 7,
        '_eight': 8,
        '_nine': 9,
        '_four': 4,
        '_five': 5,
        '_six': 6,
        '_one': 1,
        '_two': 2,
        '_free': 3,
        '_zero': 0,
        '_degree': '^',
        '_plus': '+',
        '_minus': '-',
        '_multiply': '*',
        '_division': '/',
        '_procent': '%',
        '_point': '.',
    }
    // табло для примера
    const tablet = document.querySelector('.tablet div');
    const calc = document.querySelector('.calc');
    // получаемый пример
    let eq = '';

    // вывод на экран результата
    function showTablet(){

        // проверка на то, что поле всегда что то содержит
        (!eq) ? eq = '0' : 
            (eq === 'Infinity') ? eq = 'ERROR' : eq;

        tablet.innerHTML = eq;

        console.log(tablet.clientWidth);

        // масштабирование размера на табло
        (!tablet.classList.contains('font_size48px') && tablet.clientWidth >= 320) ? tablet.classList.add('font_size48px') : 
            (tablet.classList.contains('font_size48px') && tablet.clientWidth >= 320) ? tablet.classList.add('font_size36px') : tablet;

        (tablet.classList.contains('font_size36px') && tablet.clientWidth < 240) ? tablet.classList.remove('font_size36px') : 
            (tablet.classList.contains('font_size48px') && tablet.clientWidth < 240) ? tablet.classList.remove('font_size48px') : tablet;

    }

    function _eq(value) {
        console.log(value);

        // замена знаков степеней
        value = value.replace('^', "**");

        return eval(value);
    }

    // событие клика
    function clickEvent(event) {
        if (event.target.closest('.key_on_off')){
            (calc.classList.contains('on')) ? (calc.classList.remove('on'), eq = '') : (calc.classList.add('on'), eq = '0');
            tablet.innerHTML = eq;
        }

        if (calc.classList.contains('on')) {
            (eq === 'ERROR') ? eq = '0' : eq;

            // цифры
            if (event.target.closest('.key_digit')) {
                (eq === '0') ? eq = '' : eq;

                let digitKey = event.target.closest('.key_digit').classList;

                let digitKeyChar = digitKey[digitKey.length - 1];
                resChar = chars[digitKeyChar] + '';

                eq += resChar;
            }
            // отчистка экрана
            if (event.target.closest('.key_delete')){
                eq = '0';
            }
            // удаление одного последнего сивола
            if (event.target.closest('._backcspace')) {
                console.log(eq);
                
                eq = (eq + '').slice(0, eq.length - 1);
            }
            // ввод степени
            if (event.target.closest('.key_operation._degree')) {

                let opKey = event.target.closest('.key_operation._degree').classList;

                let opKeyChar = opKey[opKey.length - 1];
                resChar = chars[opKeyChar] + '';

                eq += resChar;
            }
            // процент (с последней цифры считает 1 процент)
            if (event.target.closest('.key_operation._procent')) {
                let opKey = event.target.closest('.key_operation._procent').classList;

                let opKeyChar = opKey[opKey.length - 1];
                resChar = chars[opKeyChar] + '';

                eq += resChar;

                // расчет процента
                console.log(eq);
                let procentIndexEq = eq.indexOf(resChar);
                let procentEqSlice = eq.slice(0, procentIndexEq);
                console.log(procentEqSlice);

                let procentEqInt = '';
                let procentEqSliceRev = procentEqSlice.split('').reverse().join('');
                console.log(procentEqSliceRev);
                for (let i in procentEqSliceRev) {
                    console.log(i, procentEqSliceRev[i], isFinite(procentEqSliceRev[i]));
                    if (isFinite(procentEqSliceRev[i]) || procentEqSliceRev[i] === '.') {
                        procentEqInt += procentEqSliceRev[i];
                        continue;
                    }
                    break;
                }

                let procentCharCount = procentEqInt.split('').length;

                console.log(procentEqInt);
                procentEqInt = +procentEqInt.split('').reverse().join('');
                console.log(procentEqInt);
                console.dir(procentEqInt);
                let res = procentEqInt / 100;
                console.log(res);
                res = (res + '').split('').reverse().join('');
                console.log(res);
                procentEqSliceRev = procentEqSliceRev.split('');
                console.log(+procentCharCount, procentEqSliceRev);
                procentEqSliceRev.splice(0, +procentCharCount, res);
                console.log(procentEqSliceRev);
                procentEqSliceRev = procentEqSliceRev.reverse().join('');

                console.log(procentEqSliceRev);

                eq = procentEqSliceRev;
            }
            // // точка
            // if (event.target.closest('.key_point._point')) {
        
            //     let pointKey = event.target.closest('.key_point._point').classList;

            //     let pointKeyChar = pointKey[pointKey.length - 1];
            //     resChar = chars[pointKeyChar] + '';

            //     eq += resChar;
            // }
            // }
            // плюс
            if (event.target.closest('.key_operation._plus')) {
                
                let opKey = event.target.closest('.key_operation._plus').classList;

                let opKeyChar = opKey[opKey.length - 1];
                resChar = chars[opKeyChar] + '';

                eq += resChar;
            }
            // минус
            if (event.target.closest('.key_operation._minus')) {
                
                let opKey = event.target.closest('.key_operation._minus').classList;

                let opKeyChar = opKey[opKey.length - 1];
                resChar = chars[opKeyChar] + '';

                eq += resChar;
            }
            // умножение
            if (event.target.closest('.key_operation._multiply')) {
                
                let opKey = event.target.closest('.key_operation._multiply').classList;

                let opKeyChar = opKey[opKey.length - 1];
                resChar = chars[opKeyChar] + '';

                eq += resChar;
            }
            // деление
            if (event.target.closest('.key_operation._division')) {
                
                let opKey = event.target.closest('.key_operation._division').classList;

                let opKeyChar = opKey[opKey.length - 1];
                resChar = chars[opKeyChar] + '';

                eq += resChar;
            }
            // равно
            if (event.target.closest('.key_operation._eq')) {
                
                eq = _eq(eq) + '';
                
            }



            // вывод примера на табло
            showTablet();
                    
        }
    }


});