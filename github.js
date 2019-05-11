class Github{
    constructor(){
        this.Client_ID = 'd845bdb9f54306ebffff';
        this.Client_Secret = '5c2c4d55b058199e5bf27fbac2e306ec1ddd443d';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async get(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.Client_ID}
        &client_secret=${this.Client_Secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.Client_ID}
        &client_secret=${this.Client_Secret}`);

        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();

        return{
            profileData,
            repoData
        }
    }
}

