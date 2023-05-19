import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { async } from '@angular/core/testing';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContestService {

  apiURL = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient,
  ) { }

  getContests() {
    this.http.get(`${this.apiURL}/pessoa_fisica`)
      .subscribe(res => res);
  }

  async postPessoaFisica(object: any): Promise<any> {
    return this.http.post(`${this.apiURL}/pessoa_fisica`, object).toPromise().then((res: any) => res)
              .catch((e: any) => e.error);
  }

  async postInscricao(object: any): Promise<any> {
    console.log(object)
    return this.http.post(`${this.apiURL}/inscricao`, object).toPromise().then((res: any) => res);
  }

  public async getStates(): Promise<void> {
    return this.http.get(`${this.apiURL}/estados`).toPromise().then((res: any) => res);
  }

  public async getCitys(idState: number): Promise<void> {
    return this.http.get(`${this.apiURL}/estado/${idState}/cidades`).toPromise().then((res: any) => res);
  }

  async pessoaJaCadastrada(object: any): Promise<any> {
    return this.http.post(`${this.apiURL}/verificacao_pessoa_cadastrada`, object).toPromise().then((res: any) => res);
  }

  async pessoaJaInscrita(id: any): Promise<any> {
    return this.http.get(`${this.apiURL}/verificacao_pessoa_inscrita/${id}`).toPromise().then((res: any) => res);
  }
}
