fetch ("https://www.themealdb.com/api/json/v1/1/random.php")
.then(response =>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error('NETWORK RESPONSE ERROR')
    }   
})
.then(data =>{
    console.log(data)
    displayRecipe(data)
})
.catch(error=> console.log('Fetch Error:', error));



//function displayRecipe
function displayRecipe(data){

    const recipe=data.meals[0];
    const recipeDiv=document.getElementById('recipe');
    const recipeName=recipe.strMeal;
    const title=document.createElement('h1')
    title.innerHTML=recipeName;
    recipeDiv.appendChild(title);

    //add image
    const recipeImg=document.createElement('img');
    recipeImg.src=recipe.strMealThumb;
    recipeDiv.appendChild(recipeImg);


    //add ingredients
    const ingredients=document.createElement('ul')
   recipeDiv.appendChild(ingredients);

    const getIngredients=Object.keys(recipe)
    .filter((ingredient)=>{
        return ingredient.indexOf('strIngredient') ==0;

    })
    .reduce((ingredients, ingredient) => {
        if (recipe[ingredient] != null) {
            ingredients[ingredient] = recipe[ingredient];
          }
          return ingredients;
    }, {});

    for(let key in getIngredients){
        let value=getIngredients[key];
        listItem=document.createElement('li');
        listItem.innerHTML=value;
        ingredients.appendChild(listItem);
    }

    //add instructions
    const instructions=recipe.strInstructions;
    const paragraph=document.createElement('p');
    paragraph.innerHTML=instructions;
    paragraph.style.size='20px';
    recipeDiv.appendChild(paragraph);

    
   
}
