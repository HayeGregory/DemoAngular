import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckLength } from './validators/checkLength.validator';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss'],
})
export class Demo10Component implements OnInit {
  reponse: string = '...';

  // init de notre formGroup (notre formulaire) avec ses controls
  public formulaire: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required, CheckLength(2, 50)]),
    email: new FormControl('mon@mail.com', [
      Validators.required,
      Validators.email,
    ]),
  });

  // get pour faciliter l'ecriture dans le html
  get nom() {
    return this.formulaire.get('nom');
  }
  get email() {
    return this.formulaire.get('email');
  }

  constructor() {}

  ngOnInit(): void {
    // ajout dynamique d'un control :
    // removeControl, setControl, get .. pour manipuler le control

    // mettre une valeur dans mail via patchValue soit a la declaration
    this.formulaire.patchValue({ nom: 'jean' });

    // setter tous les champs
    // this.formulaire.setValue({
    //   nom: 'jean-jacques',
    //   email: 'jj@mail.com',
    // });
  }

  reset(): void {
    this.formulaire.reset();
  }

  // methode submit pour recuperer les données du formulaire
  submit(): void {
    console.log('Formulaire valid ? ' + this.formulaire.valid);
    console.log(this.formulaire);

    // recuperer les valeurs soit avec value
    // console.log(this.formulaire.value);

    // soit avec getRawValue qui recupere egalement les chmaps disabled
    // console.log(this.formulaire.getRawValue());
    this.reponse = this.nom?.value + ' avec son email : ' + this.email?.value;
  }
}
