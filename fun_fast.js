/**
 * Created by andreeapescar on 7/13/16.
 */
(function () {

    function handleSquare (element, clickyValue, transformValue, transformValue2) {
        element.setAttribute('clicky', clickyValue);
        element.style.transform = transformValue;
        transformValue2 && setTimeout(function () {
            element.style.transform = transformValue2;
        }, 4000);
    }

    document.getElementById("viewId").addEventListener('click', function (evt) {
        var clicked         = evt.target.parentNode,
            clickyValue     = clicked.getAttribute('clicky') === 'True' ? 'False' : 'True',
            highOffset      = window.innerHeight - clicked.offsetHeight - 40,
            functionMapping = {
                'red'  : {
                    fn        : handleSquare,
                    valueFalse: 'translate(0px, 0px)',
                    valueTrue : 'translate('.concat(116 * 2 + 80, 'px, ', highOffset, 'px)')
                },
                'blue' : {
                    fn        : handleSquare,
                    valueFalse: 'translate(0px, 0px)',
                    valueTrue : 'translate(0px,'.concat(highOffset, 'px)')
                },
                'green': {
                    fn        : handleSquare,
                    valueFalse: 'translate(0px,'.concat(highOffset, 'px)'),
                    valueTrue : 'translate(0px,'.concat(highOffset, 'px)'),
                    value2True: 'translate('.concat(-116 - 40, 'px, ', highOffset, 'px)'),
                    value2False:'translate(0px, 0px)'
                }
            };

        Object.keys(functionMapping).forEach(function (key) {
            var square = functionMapping[key];

            clicked.className.indexOf(key) !== -1 && square.fn(clicked, clickyValue, square['value'.concat(clickyValue)],square['value2'.concat(clickyValue)]);
        });
    });
})();