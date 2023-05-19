<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Exception;

class PessoaFisica extends Model
{
	protected $table = 'pessoa_fisica';
	
	protected $fillable = [
	    'nome',
	    'cpf',
	    'endereco',
	    'cidade_id',
	    'estado_id'
	];
	
    public static function createPessoaFisica(PessoaFisica $pessoa){
		$pessoa->save();
    	return PessoaFisica::select('id')->latest()->first();
    }
    
    public static function updatePessoaFisica(PessoaFisica $pessoa){
    	return $pessoa->save();
    }
    
    public static function loadPessoaFisicaById($id){
        return PessoaFisica::find($id)->first();
    }
    
    public static function deletePessoaFisica(PessoaFisica $pessoa){
        $pessoa = self::loadPessoaFisicaById($pessoa);
    	return $pessoa->delete();
    }
  
}
