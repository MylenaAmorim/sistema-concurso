<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Estado;
use App\Models\Cidade;

class EstadoController extends Controller
{
   
    public function __construct(){}

    public function show(Request $request)
    {
        return json_encode(Estado::loadEstados());
    }

    public function showCitysById(Request $request, $id)
    {
        return json_encode(Cidade::loadCitysById($id));
    }
}
