import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  listesexe: any;
  Status: any;
  formulaireInscription: any
  typeUser: any;

  constructor(private router: Router, private clientservice: ClientService) { }

  ngOnInit() {
    this.clientservice.Sexe().subscribe(result=>{
      this.listesexe= result
    })

    this.clientservice.StatutSalle().subscribe(result=>{
      this.Status= result
    })
    this.clientservice.TypeUser().subscribe(result=>{
      this.typeUser= result
    })

    this.formulaireInscription = new FormGroup({
      firstname: new FormControl(null,[Validators.required, Validators.maxLength(50)]),
      lastname: new FormControl(null,[Validators.required, Validators.maxLength(50)]),
      sex: new FormControl(null,[Validators.required, Validators.maxLength(50)]),
      email: new FormControl(null,[Validators.required, Validators.maxLength(50)]),
      phone: new FormControl(null,[Validators.required, Validators.maxLength(50)]),
      password: new FormControl(null,[Validators.required, Validators.maxLength(50)]),
      role: new FormControl(null,[Validators.required, Validators.maxLength(50)]),
    })
  }

  onSubmit(){
  
    //2ième etape : pour afficher les infos de login saisies par le user
    if(this.formulaireInscription.value.email == null || this.formulaireInscription.value.password == null ||
      this.formulaireInscription.value.firstname == null || this.formulaireInscription.value.lastname == null ||
      this.formulaireInscription.value.phone == null || this.formulaireInscription.value.sex== null||
      this.formulaireInscription.value.role == null ){
      // Si un champs est vide, on signale
      alert('Veuillez remplir tous les champs') ;
    }else{
      // this.formulaireInscription.value.firstname,this.formulaireInscription.value.lastname,
      console.log(this.formulaireInscription.value)
        
        this.clientservice.inscription(this.formulaireInscription.value).subscribe(result=>{
        console.log(result);
        if (result!=null){
          alert(' inscription réussie !!! ')
          // Rediriger vers page d'acceuil
  
          // this.infoUser = JSON.parse(localStorage.setItem('infoUser'));
          // localStorage.setItem('infoClient',JSON.stringify(result))
          this.router.navigate(['/login']);
          // this.router.navigate(['/onglet/home']);
        }else{
          alert('Erreur de connexion')
        }
        
      },
      error=>{
        alert('Erreur de connexion')
        console.log(error.error)
      }
      )
    }}

}
