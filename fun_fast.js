/**
 * Created by andreeapescar on 7/13/16.
 */
(function () {

    function handleSquare (element, clickyValue, transformValue, transformValue2) {
        element.dataset.toggle  = clickyValue;
        element.style.transform = transformValue;
        transformValue2 && setTimeout(function () {
            element.style.transform = transformValue2;
        }, 2500);
    }

    function clickHandle (evt) {
        var element         = evt.target.parentNode,
            //key             = element.classList[element.classList.length - 1], //varianta 1
            key2            = element.dataset.color,
            toggleValue     = element.dataset.toggle === 'True' ? 'False' : 'True',
            highOffset      = window.innerHeight - element.offsetHeight - 40,
            functionMapping = {
                'red'  : {
                    valueFalse: 'translate(0px, 0px)',
                    valueTrue : 'translate('.concat(116 * 2 + 80, 'px, ', highOffset, 'px)')
                },
                'blue' : {
                    valueFalse: 'translate(0px, 0px)',
                    valueTrue : 'translate(0px,'.concat(highOffset, 'px)')
                },
                'green': {
                    valueFalse : 'translate(0px,'.concat(highOffset, 'px)'),
                    valueTrue  : 'translate(0px,'.concat(highOffset, 'px)'),
                    value2True : 'translate('.concat(-116 - 40, 'px, ', highOffset, 'px)'),
                    value2False: 'translate(0px, 0px)'
                }
            },
            //square          = functionMapping[key]; //varianta 1
            square          = functionMapping[key2];

//        element.className.indexOf(key) !== -1 && handleSquare(element, toggleValue, square['value'.concat(toggleValue)], square['value2'.concat(toggleValue)]); //varianta 1
        element.className.indexOf(key2) !== -1 && handleSquare(element, toggleValue, square['value'.concat(toggleValue)], square['value2'.concat(toggleValue)]);
    }

    document.getElementById("viewId").addEventListener('click', clickHandle);
})();

//sa scot functia in afara
//redenumirea lui clicked cu element
//clicky <-> toggle ; toggleValue
//scot fn
//sa modific partea cu object.keys
// lucrez cu dataset

//event preventdefault si stoppropagation
