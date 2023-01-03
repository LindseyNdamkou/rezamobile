import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-formulairemodifclient',
  templateUrl: './formulairemodifclient.page.html',
  styleUrls: ['./formulairemodifclient.page.scss'],
})
export class FormulairemodifclientPage implements OnInit {
  formulaireModificationInfoClient: any;
  clientAModifier: any;
  listesexe: any;
  

  constructor(private clientService: ClientService,private router: Router) { }
  ngOnInit(): void {

    // this.clientAModifier = JSON.parse(localStorage.getItem('clientAModifier')!);

    // this.clientService.Sexe().subscribe(result=>{
    //   this.listesexe= result
    // })
    // // if et else, Pour savoir quel formulaire on envoi, S'il y'a un objet on envoi un formulaire rempli, sinon c'est un formulaire vide
    // if(this.clientAModifier){
      
    //   this.formulaireModificationInfoClient= new FormGroup({
    //     firtsname: new FormControl(this.clientAModifier.firstname,[Validators.required, Validators.maxLength(50)]),
    //     lastname: new FormControl(this.clientAModifier.lastname , [Validators.required, Validators.maxLength(50)]),
    //     sex: new FormControl(this.clientAModifier.sex , [Validators.required, Validators.maxLength(50)]),
    //     email: new FormControl(this.clientAModifier.email , [Validators.required, Validators.maxLength(50)]),
    //     phone: new FormControl(this.clientAModifier.phone,[Validators.required, Validators.maxLength(50)]),
      
      
    //   })
    //   console.log(this.clientAModifier,this.formulaireModificationInfoClient.value);
    // }else{
    //   this.formulaireModificationInfoClient = new FormGroup({
    //     lastname: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    //     firtsname: new FormControl(null,[Validators.required, Validators.maxLength(50)]),
    //     email: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    //     phone: new FormControl(null,[Validators.required, Validators.maxLength(50)]),
    //     sex: new FormControl(null,[Validators.required, Validators.maxLength(50)]),
        
    //   })
    // }
  }

  ngOnDestroy(){
    localStorage.removeItem('clientAModifier');
  }
  // onSubmit(){
  //   if(this.formulaireModificationInfoClient.value.firstname == null || this.formulaireModificationInfoClient.value.lastname == null||
  //     this.formulaireModificationInfoClient.value.sex == null || this.formulaireModificationInfoClient.value.email == null ||this.formulaireModificationInfoClient.value.firstname == null || 
  //     this.formulaireModificationInfoClient.value.phone == null ){
  //     // Si un champs est vide, on signale
  //     alert('Veuillez remplir tous les champs') 
  //   }
  //   else{
  //     // Si tous les champs sont pleins, on soumets le formulaire,

  //     if(this.clientAModifier){
  //       // Si il y'a un service a modifier, on le modifie
  //       this.clientAModifier.firstname = this.clientAModifier.value.firstname;
  //       this.clientAModifier.lastname = this.clientAModifier.value.lastname;
  //       this.clientAModifier.sex = this.clientAModifier.value.sex;
  //       this.clientAModifier.email = this.clientAModifier.value.email;
  //       this.clientAModifier.phone = this.clientAModifier.value.phone;
       
  //       // this.fonctionAModifier.abbrevationFonction = this.formulaireFonction.value.abbrevationFonction;
  //       this.clientService.modifierclient(this.clientAModifier).subscribe(result=>{
  //         alert(' Les informations du client ont a été modifié avec SUCCESS !!! ')
  //         // Pour effacer en mémoire, comme ça après on ne considère plus l'objet ci comme un objet à modifier, et il ne sera plus dans le local storage
  //         localStorage.removeItem('clientAModifier');

  //         // Rediriger vers page d'acceuil
  //         this.router.navigate(['/onglet/profil']);
  //       },
  //       error=>{
  //         // En cas d'erreur
  //         alert('Erreur lors de la modification des informations du client')
  //       })
  //     }else{
  //       this.clientService.EnregistrerClient(this.formulaireModificationInfoClient.value).subscribe(result=>{
  //         // SI le cours a été bien enregistré
  //         if (result!=null){
  //           alert(' Le client a été enregistré avec SUCCESS !!! ')
  //           // Rediriger vers page d'acceuil
  //           this.router.navigate(['/onglet/profil']);
  //         }else{
  //           alert(' pas de mise à jour : Le client existe déjà !!! ')
  //           // Rediriger vers page d'acceuil
  //           this.router.navigate(['/onglet/profil']);
  //         }
          
  //       },
  //       error=>{
  //         // En cas d'erreur
  //         alert('Erreur lors de l\'enregistrement du client')
  //       })
  //     }
  //   }
  // }

  }


