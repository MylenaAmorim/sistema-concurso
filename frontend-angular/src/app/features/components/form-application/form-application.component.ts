import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContestService } from 'src/app/core/services/contest.service';
import { Validators } from '@angular/forms';
import { HelpListInfosComponent } from 'src/app/shared/helpers/help-list-infos/help-list-infos.component';

@Component({
  selector: 'app-form-application',
  templateUrl: './form-application.component.html',
  styleUrls: ['./form-application.component.css'],
  providers: [ContestService]
})

export class FormApplicationComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    cpf: ['', Validators.required],
    state: [0, Validators.required],
    city: [0, Validators.required],
    office: ['', Validators.required]
  });

  states: any;
  stateSelected: any;
  citys: any;
  errorMsg: any = "";
  getMessage: string  = '';
  getErrorRequest: boolean = false;
  btnVisibledPrint: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private contestService: ContestService,
    private helpListInfosComponent: HelpListInfosComponent
  ) { }

  async ngOnInit() {
    if (!sessionStorage.getItem('estados')) {
      await this.helpListInfosComponent.getStates();
    }

    this.states = sessionStorage.getItem('estados');
    this.states = JSON.parse(this.states);
  }

  async onSubmitApplication(): Promise<void> {
    let person, objectInscription, alreadyRegistered;

    var object = {
      "nome":  this.checkoutForm.value.name,
      "cpf": this.checkoutForm.value.cpf?.replace(/[^0-9]/g, ''),
      "endereco": this.checkoutForm.value.address,
      "cidade_id": this.checkoutForm.value.city,
      "estado_id": this.checkoutForm.value.state
    }

    person = await this.contestService.pessoaJaCadastrada(object);

    if (person) {
      alreadyRegistered = await this.contestService.pessoaJaInscrita(person.id); 
      
      if (alreadyRegistered) {
        this.addMessages({message: 'Você já está inscrito(a) no concurso', error: true})
      } else {
        objectInscription = {'pessoa_fisica_id': person.id, 'cargo': this.checkoutForm.value.office, 'situacao': 'enviado'};
      }
    } else {
      person = await this.contestService.postPessoaFisica(object);

      if (person.error) this.addMessages(person);

      objectInscription = {'pessoa_fisica_id': person.pessoa_fisica_id, 'cargo': this.checkoutForm.value.office, 'situacao': 'enviado'};
    }
    
    let postInscription = await this.contestService.postInscricao(objectInscription);

    if (postInscription.error == false) this.btnVisibledPrint = true;

    this.addMessages(postInscription);

    // if (postPeaple.error == false) this.checkoutForm.reset(); //limpa a variável
  }

  addMessages(response: any) {
    this.getMessage = response.message;
    this.getErrorRequest = response.error;
  }

  onKeypressEvent(event: any) {
    try {
      let valueInput = event.target.value;

      for (let index = 0; index < event.target.value.length; index++) {
        if (
          (valueInput.charCodeAt(index) > 64 && valueInput.charCodeAt(index) < 91) ||
          (valueInput.charCodeAt(index) > 96 && valueInput.charCodeAt(index) < 123) ||
          (valueInput.charCodeAt(index) > 191 && valueInput.charCodeAt(index) <= 255) //letras com acentos
        ) {

        } else {
          return "Só é permitido letras";
        }
      }
    } catch (err) {
      return err;
    }
  }

  formatCPF(number: any) {
    let numberFormated = number.target.value.replace(/\D/g,"");

    numberFormated = numberFormated.replace(/(\d{3})(\d)/,"$1.$2");
    numberFormated = numberFormated.replace(/(\d{3})(\d)/,"$1.$2");
    numberFormated = numberFormated.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    
    number.target.value = numberFormated;
  } 

  async onChangeState(event: any) {
    this.citys = await this.contestService.getCitys(event);
    this.stateSelected = event;
  }

  print() {
    window.print();
  }
}
