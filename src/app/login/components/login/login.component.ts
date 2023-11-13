import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  formGroup: FormGroup;


  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {

    this.formGroup = formBuilder.group({
      id: [null],
      login: ['', Validators.required],
      senha:['']
    })
  }


  ngOnInit(): void {}

}
