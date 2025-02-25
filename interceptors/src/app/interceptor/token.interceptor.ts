import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const token = localStorage.getItem('userToken');
  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  return next(newReq);
};

// ! Token Interceptor automatically adds an Authorization header with a token to all outgoing HTTP requests.
// & Bearer is a keyword used in the Authorization HTTP header to indicate that the client is sending a Bearer Token to access protected resources on the server.
// ? When you log in to a website or an app, the server generates a token for you, which is sent with every request as proof of authentication.
// * Authorization: Bearer <token>
// ^ Authorization: The name of the header.
// ^ Bearer: Specifies the token type.
// ^ <token>: The actual security token (a long encrypted string).
