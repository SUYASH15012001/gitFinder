const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

 searchUser.addEventListener('keyup', (e)=> {
     const userText = e.target.value;
     if(userText !== ''){
        github.getUser(userText)
        .then((data) => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User not found','alert alert-danger');
            }
            else if(data.profile.message) {
                ui.showAlert('No. of hits allowed per hour has been sufficed','alert alert-danger');
            }
            else {
                ui.showProfile(data.profile); 
                ui.showRepos(data.repos); 
            }
            console.log(data);
        })
     }
     else {
        ui.clearProfile();
        ui.clearRepos();
    }
 })