import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponentComponent } from './components/calculadora-component/calculadora-component.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculadoraComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado(){
    console.log("Chamando o método para calcular o resultado!");
    console.log("Numero1: " + this.numero1);
    console.log("Numero2: " + this.numero2);
    this.resultado = this.numero1 + this.numero2;
  }
  
}
