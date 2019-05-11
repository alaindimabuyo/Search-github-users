const github = new Github()

const ui = new UI;


document.getElementById('searchUser').addEventListener('keyup', inputUser);

function inputUser(e){
    const userText =  e.target.value;

    if(userText !== ''){
        github.get(userText)
            .then(data => {
                if(data.profileData.message === 'Not Found'){
                    // show error
                    ui.showAlert('User Not Found', 'alert alert-danger')
                }else{
                    // show profile
                    ui.showProfile(data.profileData);
                    ui.showRepo(data.repoData)
                }
            })
            
    }else{
        // clear profile

        ui.clearProfile();
    }
}