import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    
    private router: Router
    
  ) { }
  
ir(){
  this.router.navigate(['/mapa']);
  return true;
}

irRegistro(){
  this.router.navigate(['/registro']);
  return true;
}
  ngOnInit(): void {
  }

}
