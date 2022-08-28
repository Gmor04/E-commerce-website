
let items = async () => {

    let response = await fetch('https://fakestoreapi.com/products') 
                   .then( response => response.json())
                   .then(json => {
                        localStorage.setItem('items', JSON.stringify(json));
                   })

}
items()

 let itemsList = JSON.parse(localStorage.getItem('items'))

let main = document.querySelector('.main')


function dispslay() {

    for (let index = 0; index < itemsList.length; index++) {
        const element = itemsList[index];
        // console.log(element);

        main.innerHTML += ` <div  class="card">
              
                      <div class="img_div" id="${element.id}" ><img class="immage" src="${element.image}"></div>              
                      <div class="item-name">${element.title}</div>
                      <div class="item-price"> #${element.price}</div>
                      <div class="item-cat">Category:${element.category}</div>
                      <button class="Add"onclick="addCart(${index})">ADD TO CART</button>
                  
                   </div>
                  `
        
    }

    // itemsList.forEach( item => {
        
    //     let  html = `
    //           <div  class="card">
              
    //                <div class="img_div" id="${item.id}" ><img class="immage" src="${item.image}"></div>              
    //                 <div class="item-name">${item.title}</div>
    //                 <div class="item-price"> #${item.price}</div>
    //                 <div class="item-cat">Category:${item.category}</div>
    //                 <button class="Add"onclick="addCart(${item.id})">ADD TO CART</button>
              
    //           </div>
                   
            
    //         `
    //         main.insertAdjacentHTML("beforeend", html)

    //         // console.log(item);
    // });

}
dispslay()



// Add cart

let box = [];
let itemNo = document.querySelector('.item_no')
function addCart(index) {

    if (box.includes(itemsList[index])) {
        return
    }else{
        box.push(itemsList[index])
        // console.log(box);    
        localStorage.setItem('cartitem', JSON.stringify(box))   
        itemNo.innerHTML = `${box.length}`
    }

    
}




