import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CheckLength } from '../demo10/validators/checkLength.validator';

@Component({
  selector: 'app-demo10bis',
  templateUrl: './demo10bis.component.html',
  styleUrls: ['./demo10bis.component.scss'],
})
export class Demo10bisComponent implements OnInit {
  reponse: string = '...';

  public formulaire: FormGroup = new FormGroup({
    informations: new FormGroup({
      nom: new FormControl('', [Validators.required, CheckLength(2, 50)]),
      email: new FormControl('mon@mail.com', [
        Validators.required,
        Validators.email,
      ]),
    }),
    hobbies: new FormArray([]),
  });

  // getters
  get nom() {
    return this.formulaire.get('informations')?.get('nom');
  }
  get email() {
    return this.formulaire.get('informations')?.get('email');
  }

  get hobbies() {
    // caster en FormArrays pour acceder aux controls
    return this.formulaire.get('hobbies') as FormArray;
  }
  constructor() {}

  ngOnInit(): void {
    console.log(this.formulaire);
  }

  public addHobby() {
    this.hobbies.push(new FormControl('', [Validators.required]));
  }

  public removeHobby(idx: number) {
    this.hobbies.removeAt(idx);
  }

  reset(): void {
    this.formulaire.reset();
  }

  submit(): void {
    console.log(this.formulaire);

    let hobbiesStr = '';
    this.reponse =
      this.nom?.value + ' avec son email : ' + this.email?.value + ' [ ';
    this.hobbies.value.forEach((element: any) => {
      this.reponse += element + ' ';
    });
    this.reponse += ' ]';
  }
}
