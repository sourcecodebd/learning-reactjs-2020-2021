<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\DataController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::get('/',[DataController::class,'index']);
Route::get('/view/{id}', [DataController::class,'show']);
Route::post('/add', [DataController::class,'store']);
Route::get('edit/{id}', [DataController::class,'edit']);
Route::post('/update/{id}', [DataController::class,'update']);
Route::delete('/delete/{id}', [DataController::class,'destroy']);