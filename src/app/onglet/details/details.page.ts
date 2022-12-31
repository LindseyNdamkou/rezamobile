import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  detail: any;
  
  
  constructor(private salle: SalleService,private router: Router) { }

  ngOnInit(): void {
    // console.log('test ngOnInit')
    this.detail=JSON.parse(localStorage.getItem('detailsalle')!)
  }

  ionViewWillEnter(){
    // console.log('test ionView')
    this.detail=JSON.parse(localStorage.getItem('detailsalle')!)
  }
 
  
  ReservationProcess(reservation:any){
    localStorage.setItem("reservation", JSON.stringify(reservation));
    // console.log(detailsalle)
    this.router.navigate(['onglet/formulairereservation']);
}
}
