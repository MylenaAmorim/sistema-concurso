<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cidade extends Model
{
	protected $table = 'cidade';
	
	protected $fillable = [
	    'cidade_id',
	    'estado_id',
	    'nome'
	];

    public static function loadCitysById($id){
        return Cidade::select()->where('cidade.estado_id', '=', $id)->get();
    }
}
