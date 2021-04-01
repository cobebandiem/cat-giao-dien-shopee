(
    ()=>{
        const cartChecks=document.querySelectorAll('.cart__item .cart__check--input');
        const cartTotal=document.querySelector('.cart__total--vnd');
        const array= Array.from(cartChecks);
        let totalMoney=array.reduce((total,item)=>{
            let price;
            if(item.checked){
                const getPrice=item.parentElement.parentElement.children[4].textContent;
                price=parseInt(getPrice.trim().slice(1).split('.').join(''));
            }else{
                price=0;
            }
            return total+price;
        },0);
        let totalFin='₫'+totalMoney.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        cartTotal.textContent=totalFin;
    }
)()