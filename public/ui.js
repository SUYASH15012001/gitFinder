class UI {
    constructor(){
        this.profile = document.getElementById('profile');
        this.repos = document.getElementById('repos');
    }
     
    showProfile(user){
        this.clearAlert();
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="user Image" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class='mb-4 btn btn-primary btn-block'>View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary m-1">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-success m-1">Followers: ${user.followers}</span>
                    <span class="badge badge-info m-1">Following: ${user.following}</span>
                    <ul class="list-group">
                        <li class="list-group-item">
                            Name: ${user.name}
                        </li>
                        <li class="list-group-item">
                            Email: ${user.email}
                        </li>
                        <li class="list-group-item">
                            Company: ${user.company}
                        </li>
                        <li class="list-group-item">
                            Location: ${user.location}
                        </li>
                        <li class="list-group-item">
                            Member Since: ${user.created_at}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <h2>Latest Repos</h2> 
        `
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showRepos(repos) {
        var output='';
        repos.forEach(function(repo) {
            output += `
                <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank" >${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary m-1">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary m-1">Watchers: ${repo.watchers}</span>
                        <span class="badge badge-success m-1">Forks: ${repo.forks_count}</span>       
                    </div>
                </div>
                </div>
            `;
        });
        this.repos.innerHTML = output;
    }
    clearRepos() {
        this.repos.innerHTML =''
    }

    showAlert(message, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container  = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        // div.innerText = message
        setTimeout(() => {
            this.clearAlert();
        },2100);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }
}