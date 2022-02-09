class Github{
    consstructor(){
        this.client_id='20d6c8d46513df4a12b4';
        this.client_secret='ab59bfba17dd2dc23c265ec7abf9111f65213c57'
    }

    async getUser(user){
        const profileResponse =await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile= await profileResponse.json();

        return{
            profile
        }
    }
    
}