//initi gitbug
const github= new Github;

//search inout
const searchUser= document.getElementById('searchUser')


//search input eent listener
searchUser.addEventListener('keyup', (e) =>{
    //get input text
    const userText=e.target.value;

    if(userText !==" "){
        
        //make http call
        github.getUser(userText)
        .then(data => {
           console.log(data) 
           if(data.profile.message === 'Not Found'){
               //show alert

           }else{
               //show profite
           }
        })
    }
})