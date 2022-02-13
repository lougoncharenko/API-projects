//fetch api
fetch ('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then(response => {
    if(response.ok){
        return response.json();
    }else{
        throw new Error('NETWORK RESPONSE ERROR')
    }
})
.then(data =>{
    console.log(data)
    displayDrink(data)
})
.catch(error => console.log('Fetch Error:', error));


//this function displays the drink on HTML
function displayDrink(data){
    //create a varaible for drink object
    const drink =data.drinks[0];
    //grab html element div named cocktail
    const drinkDiv = document.getElementById("cocktail");
    //grab data of drink name from api object
    const drinkName=drink.strDrink;
    //create an h1 element
    const header= document.createElement('h1');
    //assign API object information to header
    header.innerHTML=drinkName;
    //append it to the HTML div
    drinkDiv.appendChild(header);

    //add an image
    const cocktailImg = document.createElement("img");
    //grab data of image from object
    cocktailImg.src = drink.strDrinkThumb;
    //append it to the HTML div
    drinkDiv.appendChild(cocktailImg);
    //add styling to image
   
    
 


}