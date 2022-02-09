//search inout
const searchUser= document.getElementById('searchUser')


//search input eent listener
searchUser.addEventListener('keyup', (e) =>{
    //get input text
    const userText=e.target.value;

    if(userText !==" "){
        console.log(userText)
    }
})