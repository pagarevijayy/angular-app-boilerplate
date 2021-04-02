import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      )
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.log('this is a client side error');
      console.error('Error:', error.error.message);
    }
    else {
      // The backend returned an unsuccessful response code.
      console.log('this is server side error');
      const errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
      console.log(errorMsg);
      console.error(`Error body: ${error.error}`);
    }

    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

}
