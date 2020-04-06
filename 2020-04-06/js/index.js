let shopMoudle = (function(){
    let navList = document.querySelectorAll('.navbar .nav-item'),
    productBox = document.querySelector('.product');
    data = null;
    let queryData = function queryData(){
        let xhr = new XMLHttpRequest;
        xhr.open('GET','./json/product.json',false);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200){
                data = JSON.parse(xhr.responseText);
            }
        }
        xhr.send();
    }
    let render = function render(){
        let str = ``;
        data.forEach(item=>{
            str +=`<div class="card">
            <img src="${item.img}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">价格:${item.price.toFixed(2)}</p>
              <p class="card-text">时间：${item.time}</p>
              <p class="card-text">热度：${item.hot}</p>
            </div>
        </div>`
        })
        productBox.innerHTML = str;
    }
    let clear = function clear(){
        Array.from(navList).forEach(item=>{
            if (item !== this){
                item.flag = -1;
            }
        })
    }
    let handle = function handle(){
        Array.from(navList).forEach(item=>{
            item.flag = -1;
            item.onclick=function(){
                item.flag *= -1;
                let pai = this.getAttribute('data-pai');
                data.sort((a,b)=>{
                    a = String(a[pai]).replace(/-/g,'');
                    b = String(b[pai]).replace(/-/g,'');
                    return (a-b)*this.flag;
                    
                })
                render();
            }
        })
    }

    return{
        init(){
            queryData();
            render();
            handle();
            clear();
            
        }
    }
})();
shopMoudle.init();