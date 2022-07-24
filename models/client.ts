

import { User } from "@firebase/auth";



class Client {

    id: string; 

    constructor(user: User) {

        this.id = user.uid; 
        
    }
}


export default Client; 





