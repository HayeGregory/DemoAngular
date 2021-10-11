import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
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

  // public formulaire: FormGroup = new FormGroup({
  //   informations: new FormGroup({
  //     nom: new FormControl('', [Validators.required, CheckLength(2, 50)]),
  //     email: new FormControl('mon@mail.com', [
  //       Validators.required,
  //       Validators.email,
  //     ]),
  //   }),
  //   hobbies: new FormArray([]),
  // });

  formulaire: FormGroup = new FormGroup({});

  // getters
  get nom() {
    return this.formulaire.get('informations')?.get('nom');
  }
  get email() {
    return this.formulaire.get('informations')?.get('email');
  }

  get hobbies() {
    // caster en FormArrays pour acceder aux controls
    console.log('je mange du poulet');
    return this.formulaire.get('hobbies') as FormArray;
  }

  // injection formBuilder
  //constructor() {}
  constructor(private fb: FormBuilder) {
    this.formulaire = this.fb.group({
      informations: this.fb.group({
        nom: ['', [Validators.required, CheckLength(2, 50)]],
        email: ['mon@mail.com', [Validators.required, Validators.email]],
      }),
      hobbies: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    console.log(this.formulaire);
  }

  public addHobby() {
    this.hobbies.push(new FormControl('', [Validators.required]));
    //this.hobbies.push(this.fb.control(['', [Validators.required]]));
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
