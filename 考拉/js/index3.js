(function () {
    let container = document.querySelector('.wrapper'),
        slideList = document.querySelectorAll('.slider'),
        // paginationList = document.querySelectorAll(' .pagination li'),
        changeLeft = document.querySelector('.buttonLeft'),
        changeRight = document.querySelector('.buttonRight');
    let step = 0,
        prev = 0,
        interval = 3500,
        autoTimer = null,
        len = slideList.length;
    // change 实现切换
    function change() {
        let cur = slideList[step],
            pre = slideList[prev];
        cur.style.zIndex = '1';
        pre.style.zIndex = '0';
        cur.style.transitionDuration = '0s';
        cur.style.opacity = '1';
        cur.addEventListener('transitionend', handle, false)

        function handle() {
            pre.style.transitionDuration = '0s';
            pre.style.opacity = '0';
        }

    }
    // 自动切换
    function autoMove() {
        prev = step;
        step++;
        step > (len - 1) ? step = 0 : null;
        change();
    }
    // 加载页面开始自动切换
    autoTimer = setInterval(autoMove, interval);
    // 鼠标进入和离开控制自动的关闭和开启
    container.onmouseenter = function () {
        clearInterval(autoTimer);
    };
    container.onmouseleave = function () {
        autoTimer = setInterval(autoMove, interval);
    };
    // 点击左右按钮切换
    changeLeft.onclick = autoMove;
    changeRight.onclick = function () {
        prev = step;
        step--;
        step < 0 ? step = len - 1 : null;
        change();
    }
})();
