import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valor1:number = 0;
  valor2:number = 0;
  resultado:number = 0;

  constructor(public toastController: ToastController) {}

  somar() {
    this.resultado = this.valor1 + this.valor2;
  }

  dividir() {
    if (this.valor2 === 0) {
      this.exibirAlerta("Operação inválida");
    } else {
      this.resultado = this.valor1 / this.valor2;
    }
  }

  multiplicar() {
    this.resultado = this.valor1 * this.valor2;
  }

  subtrair() {
    this.resultado = this.valor1 - this.valor2;
  }

  raizQuadrada() {
    this.resultado = Math.sqrt(this.valor1);
  }

  fatorial() {
    this.resultado 

    var resultado = this.valor1;
    var primeiroMultipicador = this.valor1 - 1;

    for (var i = primeiroMultipicador; i > 1; i--) {
      resultado *= i;
    }

    this.resultado = resultado;
  }

  async exibirAlerta(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: 'middle',
      icon: 'hand-left-outline'
    });
    toast.present();
  }

  
}
