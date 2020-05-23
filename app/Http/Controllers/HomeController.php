<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;
class HomeController extends Controller
{
    public function show()
    {
        $data = Product::get();

        return view('app')->with('data', $data);
    }
}
