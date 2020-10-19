class Github {
    constructor(){
        this.client_id = '18070c5d2609dfc52cb5';
        this.client_secret = '1c9ae8a747afae7260420b78c7fe659214495e49',
        this.repos_count = 5;
        this.repos_sort = 'updated_at: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}