// toute la logique se passe ici 

import { User } from '../model/Model';


export class AuthenService {
  
    /**
     * async methode because it will access services via the internet
     * return User object if login is successful, otherwise undefined 
     */
    public async login(userName: string, password: string):Promise<User | undefined> {
        // somme dummi programm first 
        if (userName === 'user' && password === '1234') {
            return{
                userName: userName,
                email: 'scharon@email.com'
            }
        }else{
            return undefined
        }
        
    }

}