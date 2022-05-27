import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public resultado = '';
  public cor = '';

  checkoutForm = this.formBuilder.group({
    nota: 0,
    frequencia: 0
  });

  constructor(private formBuilder: FormBuilder) {}

  calcularAprovacao() {
    const nota = this.checkoutForm.controls['nota'].value;
    const frequencia = this.checkoutForm.controls['frequencia'].value;

    if (nota >= 6 && frequencia >= 75) {
      this.resultado = 'Aprovado';
    } else if (nota >= 4 && nota < 6 && frequencia >= 75) {
      this.resultado = 'Recuperação';
    } else if (nota < 4 || frequencia < 75) {
      this.resultado = 'Reprovado';
    }

    this.corResultado();
  }

  corResultado() {
    if (this.resultado == 'Aprovado') {
      this.cor = 'd-label-result d-green';
    } else if (this.resultado == 'Recuperação') {
      this.cor =  'd-label-result d-yellow';
    } else if (this.resultado == 'Reprovado') {
      this.cor =  'd-label-result d-red';
    }
  }
}
