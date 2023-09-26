// import {img1} from "./img1.jpg"
// //call api and rander data

// /*async function callApi(){
//     let result = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
//     result=await result.json()
//     console.warn(result)
// }
// callApi()*/

// fetch("https://fakestoreapi.com/products")
//   .then((data) => {
//     return data.json();
//   })
//   .then(function (data) { 
    
//       let data1 = "";
//       data.map((value) => {
//           data1 + <div class="card">
//               <h1 class="t1">${value.title}</h1>
//               <img src $ {...value.img1} alt="" class=""></img>
//               <p>${value.description}</p><p class="c1">${value.category}</p>
//               <p class="p1">${value.price}</p>
//           </div>;
//       }
//       );
//   });
  



fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  }).then((completedata)=> {
    let data1 = "";
    completedata.map((values) => {
      data1+= `
        <div class="card">
          <h1 class="t1">${values.title}</h1>
          <img src="${values.image}" alt="" class="images" />
          <p>${values.description}</p>
          <p class="c1">${values.category}</p>
          <p class="p1">${values.price}</p>
        </div>`;
    });
    // Render the generated HTML
    document.getElementById("cards").innerHTML = data1;
  }).catch((err)=>
  {
    console.log(err);
  })

  
