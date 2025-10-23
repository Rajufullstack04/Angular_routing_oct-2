import { Component,OnInit } from '@angular/core';
import { CoustmorServices } from '../coustmor.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coutmors',
  templateUrl: './coutmors.component.html',
  styleUrls: ['./coutmors.component.css']
})
export class CoutmorsComponent implements OnInit {

constructor(private coustmorservices:CoustmorServices,private router:Router){

}

  coustmors:any = [];
  ngOnInit(): void {
      this.coustmors=this.coustmorservices.getcoustmors();
  }

evntNavigation(coustmorId:any){
 // based on handal  with params (button)--------------------
  this.router.navigate(['/costmor-list',coustmorId]);

  // based on handal  with queryparams (button)-------------------------

  // this.router.navigate(['/costmor-list'],{queryParams:{ID:coustmorId}})

    // based on handal  with fragment (button)-----------------------
  // this.router.navigate(['/costmor-list'],{fragment:coustmorId});



  
}

}
