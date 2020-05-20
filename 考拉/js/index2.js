(function () {
    let click = document.querySelectorAll('.exchange');
    let btn = document.querySelector('.titleRight');
    btn.onclick = function () {

        [...click].forEach(item => {
            item.classList.toggle('remo');
        })
    }
})();