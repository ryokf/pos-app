<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Outcome\ProductFlavorResource;
use App\Http\Resources\Outcome\ProductSizeResource;
use Inertia\Inertia;

class OutcomeController extends Controller
{
    public function index() {
        return Inertia::render('Admin/Outcome/index');
    }
}
