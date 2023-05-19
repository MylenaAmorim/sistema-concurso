<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PessoaFisica;
use Exception;

class PessoaFisicaController extends Controller
{

    public function __construct() {}

    public function store(Request $request)
    {
        try {
            $this->validate(
                $request,
                [
                    'nome' => 'required',
                    'cpf' => 'required',
                    'endereco' => 'required',
                    'cidade_id' => 'required',
                    'estado_id' => 'required',
                ]
            );
    
            $validCpf = $this->validCPF($request->cpf);
            if (!$validCpf) {
                return response()->json(['message' => 'CPF inválido', 'error' => true], 401);
            }
    
            $pessoa = new PessoaFisica();
            $pessoa->nome = ucwords($request->nome);
            $pessoa->cpf = $request->cpf;
            $pessoa->endereco = $request->endereco;
            $pessoa->cidade_id = $request->cidade_id;
            $pessoa->estado_id = $request->estado_id;
    
            $pessoaCadastrada = PessoaFisica::createPessoaFisica($pessoa);

            if ($pessoaCadastrada) {
                return response()->json(['pessoa_fisica_id' => $pessoaCadastrada['id'], 'message' => "Cadastro feito com sucesso", 'error' => false], 201);
            } else {
                return response()->json(['message' => $e->getMessage(), 'error' => true], 400);
            }
        } catch(Exception $e) {
            return response()->json(['message' => $e->getMessage(), 'error' => true], 400);
        }
    }

    public function validCPF($cpf) {
        // Verifica se o numero de digitos informados é igual a 11
        if (strlen($cpf) != 11) {
            return false;
        }
        // Verifica se nenhuma das sequências invalidas abaixo
        // foi digitada. Caso afirmativo, retorna falso
        else if ($cpf == '00000000000' ||
            $cpf == '11111111111' ||
            $cpf == '22222222222' ||
            $cpf == '33333333333' ||
            $cpf == '44444444444' ||
            $cpf == '55555555555' ||
            $cpf == '66666666666' ||
            $cpf == '77777777777' ||
            $cpf == '88888888888' ||
            $cpf == '99999999999') {

            return false;
            // return response()->json(['error' => 'CPF inválido'], 401);
        // Calcula os digitos verificadores para verificar se o
        // CPF é válido
        }
        else {
            for ($t = 9; $t < 11; $t++) {
                for ($d = 0, $c = 0; $c < $t; $c++) {
                    $d += $cpf[$c] * (($t + 1) - $c);
                }

                $d = ((10 * $d) % 11) % 10;

                if ($cpf[$c] != $d) {
                    return false;
                }
            }
            return true;
        }
    }

    public function update(Request $request)
    {
        $this->validate(
            $request,
            [
                'id' => 'required',
                'nome' => 'required',
			    'cpf' => 'required',
			    'endereco' => 'required',
			    'cidade_id' => 'required',
			    'estado_id' => 'required',
            ]
        );

	    $pessoa = PessoaFisica::find($request->id);
	    $pessoa->nome = $request->nome;
	    $pessoa->cpf = $request->cpf;
	    $pessoa->endereco = $request->endereco;
	    $pessoa->cidade_id = $request->cidade_id;
	    $pessoa->estado_id = $request->estado_id;

        return json_encode(PessoaFisica::updatePessoaFisica($pessoa));
    }

    public function index(Request $request)
    {
    	$this->validate(
            $request,
            [
                'nome' => 'nullable'
            ]
        );

        if(null != $request->nome){
        	$result = PessoaFisica::where('nome', $request->nome)->orderBy('nome')->get();
        	return json_encode($result);
        }

        return json_encode(PessoaFisica::orderBy('nome')->get());
    }

    public function show(Request $request, $id)
    {
        return json_encode(PessoaFisica::loadPessoaFisicaById($id));
    }


    public function destroy(Request $request, $id)
    {
        $pessoa = PessoaFisica::find($id);

        return json_encode(PessoaFisica::deletePessoaFisica($pessoa));
    }

    public function peopleExisting(Request $request)
    {
        $result = PessoaFisica::where('nome', $request->nome)
                                ->where('cpf', $request->cpf)
                                ->where('endereco', $request->endereco)
                                ->where('cidade_id', $request->cidade_id)
                                ->where('estado_id', $request->estado_id)
                                ->first();

        return $result;
    }

}
