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
}
