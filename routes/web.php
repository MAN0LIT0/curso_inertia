<?php

use App\Http\Controllers\Auth\LoginController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('login', [LoginController::class, 'create'])->name('login');

Route::middleware('auth')->group( function(){
    Route::get('/', function () {
        return Inertia::render('Home');
    });

    Route::get('/settings', function () {
        return Inertia::render('Settings');
    });

    Route::get('/users/index', function (Request $request) {
        return Inertia::render('Users/Index', [
            'users' => User::when($request->input('search'), function ($query, $search) {
                    $query->where('name', 'like', "%{$search}%");
                })
                ->paginate(5)
                ->withQueryString()
                ->through(fn ($user) => [
                    'id' => $user->id,
                    'name' => $user->name
                ]),
            'filters' => $request->only(['search'])

        ]);
    });
    Route::get('/users/create', function () {
        return Inertia::render('Users/Create');
    });
    Route::any('/users', function (Request $request) {
        // validar
    $data = $request->validate([
            'name' => 'required',
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);
        // criar o usuario
        User::create($data);

        // redirecionar
        return redirect('/users/index');
    });

    Route::post('/logout', function () {
        dd(request('foo'));
    });
});
