async function getSuperHeroData(){
    const response = await fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
    const data= await response.text();
    // use parse() to convert the text to a JavaScript object.
    const superHeroes = JSON.parse(data);
   
   createHeader(superHeroes);
   createHeroes(superHeroes);
}

// getSuperHeroData().then(heros => console.log(heros))



//create the header
function createHeader(obj){
const header=document.querySelector('header');
const h1=document.createElement('h1');
h1.innerHTML=obj['squadName'];
header.appendChild(h1);

const newParagraph = document.createElement('p');
newParagraph.innerText=`Hometown: ${obj['homeTown']} // Formed: ${obj['formed']}`;
header.appendChild(newParagraph);
}


//function create heros
function createHeroes(obj){
    const section = document.querySelector('section');
    const heroes = obj['members'];
  
    for (const hero of heroes) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement('li');
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
}

getSuperHeroData();