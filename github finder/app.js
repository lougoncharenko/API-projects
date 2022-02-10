//initi gitbug
const github= new Github;
//initialize UI
const ui= new UI;

//search input
const searchUser= document.getElementById('searchUser')


//search input eent listener
searchUser.addEventListener('keyup', (e) =>{
    //get input text
    const userText=e.target.value;

    if(userText !==" "){
        
        //make http call
        github.getUser(userText)
        .then(data => {
        //    console.log(data) 
           if(data.profile.message === 'Not Found'){
               //show alert
               ui.showAlert('User not found', 'alert alert-danger')

           }else{
               //show profite
               ui.showProfile(data.profile);
               ui.showRepos(data.repos);
           }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }
});