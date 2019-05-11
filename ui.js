class UI {
    constructor(){
        this.profile = document.getElementById('profile')
    }
    showProfile(user){
        
            
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class ="row">
                    <div class = "col-md-3">
                        <h6>${user.name}</h6>
                        <img src="${user.avatar_url}" class ="img-fluid mb-2" >
                        <a href = "${user.html_url}" target="_blank" class ="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class = "col-md-9 pt-2">
                        <span class="badge badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-pill badge-info">Public Gist: ${user.public_gists}</span>
                        <span class="badge badge-pill badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-pill badge-danger">Following: ${user.following}</span>

                        <br><br>
                        <ul>
                            <li class ="list-group-item">Company: ${user.company}</li>
                            <li class ="list-group-item">Website: ${user.blog}</li>
                            <li class ="list-group-item">Location: ${user.location}</li>
                            <li class ="list-group-item">Member Since: ${user.created_at}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        `
        console.log(user)
    }
    showRepo(repos){
        console.log(repos)
        let output = '';

        repos.forEach((repo)=>{
            output += `<div class="card card-body mb-2">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            </div>
                            <div class="col-md-6">
                                <span class="badge badge-pill badge-primary">Stars: ${repo.stargazers_count}</span>
                                <span class="badge badge-pill badge-info">Watchers: ${repo.watchers_count}</span>
                                <span class="badge badge-pill badge-success">Forks: ${repo.forks_count}</span>
                            </div>
                        </div>
                        
                    </div>
            `
        })
        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message, className){
        this.clearAlert()
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer')
        const search = document.querySelector('.search')
        container.insertBefore(div,search);

        setTimeout(()=>{
            this.clearAlert();
        },3000)
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    clearProfile(){
        this.profile.innerHTML = ''
    }
}