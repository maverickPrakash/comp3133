import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {gql} from 'graphql-tag'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent  implements OnInit{
  constructor(private router:Router){}

  ngOnInit(): void {

    
    if(localStorage.getItem('Login') === 'Sucessful'){
        
      this.router.navigate(['/']);

    }
  }


}
