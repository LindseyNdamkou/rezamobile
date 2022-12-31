import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavorisService } from 'src/app/services/favoris.service';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

  listeFavoris: any;
  constructor(private salle: SalleService,private router: Router,private favoris: FavorisService) {
    favoris.ajouterfavoris(favoris).subscribe((rep) => {
      // console.log(rep);
      this.listeFavoris = rep;
    });
   }

  ngOnInit(): void {

    // this.fav=JSON.parse(localStorage.getItem("favoris")!)
    // console.log(this.fav)
  }
 
    
}


