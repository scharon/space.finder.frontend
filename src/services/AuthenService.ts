// toute la logique se passe ici 

import { User } from '../model/Model';


export class AuthenService {
  
    /**
     * async Methode because it will access services via the internet
     * User object If login is successful, otherwisew undefined 
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