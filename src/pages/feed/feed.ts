import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario: string = "Saulo Pedro";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public SomaDoisNumeros(num1:number, num2:number): void {//metodo responsavel por salvar dois numeros fixo.
    alert(num1+num2);//dois valores vindo pro parametro
    //alert(5+10);//calculando e exibindo o valor.
  }

  ionViewDidLoad() {
    //this.SomaDoisNumeros(10,25);//chamando a função, e colocando os valores para a soma que esta sendo usada no metodo.
    
  }

}
