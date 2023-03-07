import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import {Api} from '../app/api'

@Injectable({
  providedIn: 'root'
})
export class ApiTypeService {
  get!: Api;
  apiUrl="http://localhost:4000/";

  constructor(private http:HttpClient) { }
  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
  
  getUserData(){
    return this.http.get<Api[]>(this.apiUrl)
    .pipe(
      retry(3),  // retry a failed request up to 3 times
      catchError(this.handleError));
  }

  addUser(users:Api):Observable<Api>{
  return this.http.post<Api>(this.apiUrl,users)
  }
  
  deleteUser(id:number):Observable<unknown>{
    const url=`${this.apiUrl}${id}`;   //or
   //return this.http.delete(this.apiUrl+id)
   return this.http.delete(url)
  //  .pipe(
  //   catchError(this.handleError('deleteUser'))
  //  );
  }
  updateUser(user:Api):Observable<Api>{
    return this.http.put<Api>(this.apiUrl,user);
    
  }
}
