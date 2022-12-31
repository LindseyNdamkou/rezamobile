
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SalleService } from "src/app/services/salle.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  listeSalle : any;
  salleService: any;
  listfav: any;
  searchville : String = "";
  idFav: any;
  detailsalle: any;
  idSalle:any
  idFavoris: any;
  listsalle : any =[];
  cachedListSalle =[] 
  statut:any=undefined
  formsearchVille = FormGroup;
  searchbarValue:String = ""
  formsearch: FormGroup | undefined ;

  constructor(private salle: SalleService,private router: Router) {}

  ngOnInit(): void {
    this.afficherSalles();

    this.formsearch = new FormGroup({
      motcle: new FormControl(null, [Validators.required]),
    });

    // this.formsearchVille = new FormGroup({
    //   motcle1: new FormControl(null, [Validators.required]),
    // });

  }

  async afficherSalles(){
      this.salle.listeSalles().subscribe((rep) => {
        this.listeSalle = rep;
        this.cachedListSalle = rep;
        console.log(rep);
      });
    }

    AjouterFav(idFavoris:any){
      localStorage.setItem("favoris", JSON.stringify(idFavoris));
      console.log(idFavoris)
      this.router.navigate(['onglet/favoris']);
  }

  DetailSalle(detailsalle:any){
    localStorage.setItem("detailsalle", JSON.stringify(detailsalle));
    console.log(detailsalle)
    this.router.navigate(['onglet/details']);
}

  // rechercher(){
  //   const listeSalle:any[] = this.cachedListSalle.filter((salle:any)=>{
  //     return salle.nomSalle.toUpperCase().includes(this.searchbarValue.toUpperCase())
  //   })
  //   this.listsalle = listeSalle
  //  }


   comparerville(salle : any , searchville:any) {
    console.log(salle.ville, 'rech = '+searchville, 'resultat = '+salle.ville == searchville, this.searchville)
    return salle.ville == searchville;

  }

  rechercherville(){
    this.listeSalle = this.cachedListSalle.filter((elt : any) => {
      return this.comparerville(elt,this.searchville);
    });
  }

  rechercherVille(event:any){
    // console.log(this.searchville, event.target.value)
    const listeSalle:any[] = this.cachedListSalle.filter((salle:any)=>{
      return salle.ville.toUpperCase().includes(this.searchville.toUpperCase()) || salle.quartier.toUpperCase().includes(this.searchville.toUpperCase())
      // return this.salle.ville.toUpperCase().includes(this.searchbarValue.toUpperCase())
    })
    this.listeSalle = listeSalle
   }

CouleurStatut(){
  if(this.statut.statutSalle == 'disponible'){
    var message = document.getElementById('status')
    
  }
  else {}
  }
 
}