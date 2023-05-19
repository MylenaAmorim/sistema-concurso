<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
	protected $table = 'estado';
	
	protected $fillable = [
	    'estado_id',
	    'nome',
	    'sigla'
	];

    public static function loadEstados() {
        return Estado::all();
    }
}
