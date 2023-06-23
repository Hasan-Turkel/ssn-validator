// ****************selectors*************

const form = document.querySelector("form");
const input = document.querySelector("input");
const article = document.querySelector("article");


// // ***************event*************

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    // form.reset();

  arr =  input.value.split("-")
//   console.log(arr);


  if (
    /*conditions of common*/
    !input.value.split("").includes("+") && !input.value.split("").includes(".") && arr.length == 3 && arr[0].length == 3 && arr[1].length == 2 && arr[2].length == 4 
     /*conditions of first part*/
     && arr[0] != "000" && arr[0] != "666" && +arr[0] < 900
    /*conditions of second part*/
    && +arr[1] <= 99 && +arr[1] >= 1
    /*conditions of third part*/
    && +arr[2] <= 9999 && +arr[2] >= 1
    ){
        valid()
    }

  else {
        invalid()
        // console.log(+arr[0]);
        
    }

    form.reset()

})

 // *************functions**********

 const valid = () => {
    
    article.innerText = `Entered SSN (${input.value}) is valid.`;
    article.className = "text-success";
    
} 
    
 const invalid = () => {article.innerText = `Entered SSN (${input.value}) is invalid.
 Please read the introduction carefully.`;
 article.className = "text-danger";}
    
 
// //  ************second solution ***********

// // *******variables***** 

// let condition1 = 0
// let condition2 = 0
// let condition3 = 0


// // *****event****

// form.addEventListener("submit", (e)=>{
//   e.preventDefault();

// arr =  input.value.split("-")
 
//  if (!input.value.split("").includes("+") && !input.value.split("").includes(".") &&arr.length == 3 && arr[0].length == 3 && arr[1].length == 2 && arr[2].length == 4 ){



  // for (let i = 1; i < 900; i++) {
    
  //   if (i==666) {
  //     continue;
//     }
//     if (i==arr[0]){
//       condition1=1;
//       break;
      
//     }
//   }
//   for (let i = 1; i < 100; i++) {
    
//     if (i==arr[1]){
//       condition2=1;
//       break;
//     }
//   }
//   for (let i = 1; i < 10000; i++) {
//     if (i==arr[2]){
//       condition3=1;
//       break;
//     }
//   }
// if(condition1 && condition2 && condition3){

//   valid()
// }
// else{
//   invalid()
//   console.log(condition1);
// }
//  } 
//  else{
//   invalid()
//  }

//  form.reset()
// }
// )


// // *************functions**********

// const valid = () => {
    
//   article.innerText = `Entered SSN (${input.value}) is valid.`;
//   article.className = "text-success";
  
// } 
  
// const invalid = () => {article.innerText = `Entered SSN (${input.value}) is invalid.
// Please read the introduction carefully.`;
// article.className = "text-danger";}


