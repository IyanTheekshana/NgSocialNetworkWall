import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  constructor() { }

  public createNewUser(dataObj: any){
    return this.http.post("http://localhost:3000/users",dataObj).pipe(catchError(error =>{
      console.log(error)
      return throwError(()=> new Error("Failed to store selected place."));
    }))
  }

  public getUser(email: string){
    return 
  }
}
