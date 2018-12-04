import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    public typeUser: string;
    public driver:boolean = false;
    public userData:any;

    constructor(){
        
    }

}