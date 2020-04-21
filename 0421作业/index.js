let box = document.querySelector('#box');
let ul = document.querySelector('ul');
let left_btn = document.querySelector('.left_btn'),
    right_btn = document.querySelector('.right_btn');
let start = 0;
let timer = null;

function move() {
    timer = setInterval(() => {
        start -= 600;
        if (start < -3000) {
            // 小于3000的时候  证明条已经出去了
            // -3000 的时候  我们显示的是伪第一张
            start = 0;
            ul.style.transition = 'none';
            ul.style.transform = `translateX(${start}px)`;
            // 闪到第一张图片后，紧接着要向第二张移动  而不是在等1.5s;
            let l = ul.offsetHeight;
            // 读取操作数据会让浏览器重新渲染；
            start = -600;
            ul.style.transition = 'all 0.3s'
        } else {
            ul.style.transition = 'all 0.3s'
        }
        ul.style.transform = `translateX(${start}px)`;
    }, 1500)
}
move();
left_btn.onclick = function () {
    start += 600;
    if (start > 0) {
        start = -3000;
        ul.style.transition = 'none';
        ul.style.transform = `translateX(${start}px)`;
        let l = ul.offsetHeight;
        start += 600;
        ul.style.transition = 'all 0.3s'
    } else {
        ul.style.transition = 'all 0.3s'
    }
    ul.style.transform = `translateX(${start}px)`;
};
right_btn.onclick=function(){
    start -= 600;
    if (start < -3000) {
        start = 0;
        ul.style.transition = 'none';
        ul.style.transform = `translateX(${start}px)`;
        let l = ul.offsetHeight;
        start = -600;
        ul.style.transition = 'all 0.3s'
    } else {
        ul.style.transition = 'all 0.3s'
    }
    ul.style.transform = `translateX(${start}px)`;
}

// 滑过盒子  清除定时器
box.onmouseenter = function () {
    clearInterval(timer);
}
// 离开盒子  重启定时器
box.onmouseleave = function () {
    move();
}
// 点击左右按钮实现左右切换