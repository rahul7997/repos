export class AuthService{
    loggedIn = true;

    isAuthenticated(){
        const promise = new Promise((resolve, reject)=>{
            resolve(this.loggedIn);
        });
        return promise;
    }

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }
}