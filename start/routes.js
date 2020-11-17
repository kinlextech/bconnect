'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// user

Route.group('', function () {
  Route.post('/login', 'UserController.login').validator('user_loginvalidate')
<<<<<<< HEAD
  Route.post('/logout', 'UserController.logout')
  Route.post('/register', 'UserController.register').validator('user_register')
}).prefix('api/v1')
=======
  Route.get('/uprofile', 'UserController.uprofile')
  Route.post('/logout', 'UserController.logout')
  Route.post('/register', 'UserController.register').validator('user_register')
}).prefix('api/v1/auth')

Route.group('', function () {
  Route.get('/detail/:id', 'Biller/WaterController.detail')
}).prefix('api/v1/biller/water')


Route.group('',function(){
  // top up utility payment
  Route.post('/upayment','Fexc/UlityPaymentController.payment')
}).prefix('api/v1/FCServ')
>>>>>>> master
