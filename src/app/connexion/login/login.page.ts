import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulairelogin;
  form : any;
  infoClient : any;
  listesexe: any;
  Status: any;

  constructor(private router: Router, private clientservice: ClientService) {
     // premiere étape : pour afficher les infos de login saisies par le user
     this.formulairelogin = new FormGroup({
      email : new FormControl(null,[Validators.required, Validators.maxLength(50)]),
      password : new FormControl(null,[Validators.required, Validators.maxLength(50)])
   }

  )}
  ngOnInit() {
    
  }

  onSubmit(){
  
    //2ième etape : pour afficher les infos de login saisies par le user
    if(this.formulairelogin.value.email == null || this.formulairelogin.value.password == null){
      // Si un champs est vide, on signale
      alert('Veuillez remplir tous les champs') ;
    }else{
      // this.formulaireInscription.value.firstname,this.formulaireInscription.value.lastname,
      console.log(this.formulairelogin.value)

        this.clientservice.login(this.formulairelogin.value.email,this.formulairelogin.value.password).subscribe(result=>{
        console.log(result);
        if (result!=null){
          alert(' connexion réussie !!! ')
          // Rediriger vers page d'acceuil
  
          localStorage.setItem('infoClient',JSON.stringify(result))
          this.router.navigate(['onglet/home']);
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
  
