(function () {
    let wrappe = document.querySelectorAll('.wrappe');
    console.log(wrappe);
    let paginationList = document.querySelectorAll('.pagina li');

    function lun(box) {
        let slideList = box.querySelectorAll('.slid');
        let step = 0,
            prev = 0,
            interval = 3000,
            autoTimer = null,
            len = slideList.length;
        // 实现渐隐渐显
        function change() {
            let slidePrev = slideList[prev],
                slideStep = slideList[step];
            slidePrev.style.zIndex = 0;
            slideStep.style.zIndex = 1;
            slideStep.style.transitionDuration = '.3s';
            slideStep.style.opacity = 1;
            // slidePrev.style.opacity = 0;
            slideStep.addEventListener('transitionend', handle, false);

            function handle() {
                slidePrev.style.transitionDuration = '0s';
                slidePrev.style.opacity = 0;
            }
            paginationFocus();
        }
        // 焦点对齐
        function paginationFocus() {
            [].forEach.call(paginationList, (item, index) => {
                if (index === step) {
                    item.className = 'active';
                    return;
                }
                item.className = '';
            });
        }
        // 点击焦点切换
        [].forEach.call(paginationList, (item, index) => {
            item.onclick = function () {
                if (index === step) {
                    return;
                }
                prev = step;
                step = index;
                change();
            }
        });
        // 实现自动渐隐渐显
        function autoFunc() {
            prev = step;
            step++;
            step === len ? step = 0 : null;
            change();
        }
        autoTimer = setInterval(autoFunc, interval);
    };
    [...wrappe].forEach(item => {
        lun(item);
    });
})();