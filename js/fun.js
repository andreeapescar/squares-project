/**
 * Created by andreeapescar on 7/13/16.
 */
(function () {
    document.getElementById("viewId").addEventListener('click', function (evt) {
        var clicked = evt.target.parentNode,
            squares = document.getElementsByClassName('square'),
            clickedStyle = clicked.style,
            highOffset = window.innerHeight - clicked.offsetHeight - 40;

        var classNames = clicked.className;
        if ((classNames.indexOf('red')) >= 0) {
            if (clicked.getAttribute('clicky') == 'true') {
                clicked.setAttribute('clicky', 'false');

                clicked.style.transform = 'translate(0px, 0px)';
            } else {
                clicked.setAttribute('clicky', 'true');
//                clickedStyle.transform = "translate(".concat(squares[2].offsetLeft -105, 'px, ', window.innerHeight - clicked.offsetHeight - 40, 'px');
                clickedStyle.transform = 'translate('.concat( 116*2 + 80, 'px, ', highOffset, 'px');

            }
        } else {
            if ((classNames.indexOf('green')) >= 0) {
                if (clicked.getAttribute('clicky') == 'true') {
                    clicked.setAttribute('clicky', 'false');

                    clickedStyle.transform = 'translate(0px,'.concat(highOffset, 'px');

                    setTimeout(function () {
                        //debugger;
                        clickedStyle.transform = 'translate(0px, 0px)';

                    }, 4000);
                } else {
                    clicked.setAttribute('clicky', 'true');
                    clickedStyle.transform = 'translate(0px,'.concat(highOffset, 'px');
                    setTimeout(function () {
                        //debugger;
                        clickedStyle.transform = 'translate('.concat(-116 - 40 , 'px, ', highOffset, 'px');
                    }, 4000);
                    }
            } else {
                if ((classNames.indexOf('blue')) >= 0) {
                    if (clicked.getAttribute('clicky') == 'true') {
                        clicked.setAttribute('clicky', 'false');

                        clickedStyle.transform = 'translate(0px,0px)';
                    } else {
                        clicked.setAttribute('clicky', 'true');
                        clickedStyle.transform = 'translate(0px,'.concat(highOffset, 'px');
                    }
                }

            }
        }

    });
})();