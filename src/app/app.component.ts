import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FizzBuzz';
  numbers = Array.apply(null, Array(100)).map( (_, i) => i).slice(1);
  fizzbuzz = function(number){
    return number % 3 === 0 && number % 5 === 0 ? 'Fizzbuzz'
    : number % 3 === 0 && number % 5 !== 0 ? 'Fizz'
    : number % 5 === 0 && number % 3 !== 0 ? 'Buzz'
    : number
  }
}
