let btn = document.querySelector('.btn-1')
btn.onclick=function(){
 fetch('https://fakestoreapi.com/products')
 .then(response=>response.json())
 .then( data =>{
    let mazahir=""
    data.forEach(ele => {
      mazahir+=`<div class="card col-lg-3 ">
      <div class="photo">
      <img src="${ele.image}" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
      <h5 class="card-title">card title ${ele.title}</h5>
      <p class="card-text">${ele.description}</p>
      <span>${ele.price}$</span>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>` 
        
    });
     
  document.getElementById('fezail').innerHTML=mazahir
 })
 .catch(error=>console.log(error))
 }

