import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  protected mensagem: string;
  protected desabilitaBotao: boolean = false;
  protected tentativas: number = 8;
  protected numero: number = 0;
  protected numeroSecreto: number;

  constructor(public toastController: ToastController) {
    this.inicializaPartida();
  }

  inicializaPartida() {
    this.desabilitaBotao = false;
    this.numeroSecreto = this.geraNumeroSecreto();
    this.tentativas = 8;
    this.mensagem = '';
  }

  adivinharNumero() {
    if (this.numero === this.numeroSecreto) {
      this.mensagem = "Acertou!";
      this.fimPartida("VENCEU!");
    } else if (this.numero < this.numeroSecreto) {
      this.mensagem = "Número é maior!";
      this.tentativas--;
    } else  {
      this.mensagem = "Número é menor!";
      this.tentativas--;
    }

    if (this.tentativas === 0) {
      this.fimPartida("FIM DE JOGO! <br>Quer jogar de novamente?");
    }
  }

  async fimPartida(msg: string) {
    this.desabilitaBotao = true;

    const toast = await this.toastController.create({
      message: msg,
      buttons:[
        {
          text: 'Sim',
          handler:() => {
            this.inicializaPartida();
          }
        },
        {
          text: 'Não',
          handler:() => {
            this.mensagem = 'Obrigado por jogar'
          }
        }
      ]
    });
    toast.present();
  }

  geraNumeroSecreto() {
    return Math.round(Math.random() * (100 - 1) + 1);
  }
}
