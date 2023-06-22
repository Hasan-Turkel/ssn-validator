// ****************selectors*************

const form = document.querySelector("form");
const input = document.querySelector("input");
const article = document.querySelector("article");


// ***************event*************

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    // form.reset();

  arr =  input.value.split("-")
//   console.log(arr);

  if (
    /*conditions of common*/
     arr.length == 3 && arr[0].length == 3 && arr[1].length == 2 && arr[2].length == 4 
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
    
 
 
 
 



