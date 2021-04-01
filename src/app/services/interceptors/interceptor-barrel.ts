import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandlingInterceptorService } from "./error-handling-interceptor/error-handling-interceptor.service";

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptorService, multi: true },
];