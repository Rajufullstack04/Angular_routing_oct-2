import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoustmorServices } from 'src/app/coustmor.services';


@Component({
  selector: 'app-coustmors-ditalies',
  templateUrl: './coustmors-ditalies.component.html',
  styleUrls: ['./coustmors-ditalies.component.css']
})
export class CoustmorsDitaliesComponent implements OnInit{
  selectedID: { coustmorId: number; coustmorName: string; age:number; coustmorlocation: string; }[] | undefined;
  coustmorInfo: any;
constructor(private ARouter:ActivatedRoute,public coustmorservices:CoustmorServices){

}


  ngOnInit(): void {
     this.ARouter.params.subscribe((result)=>{
      console.log("From Params",result);

      this.coustmorInfo = result;


      let coustmorslist=this.coustmorservices.getcoustmorslist();
    
      this.selectedID=coustmorslist.filter((Custmer)=>{
        return Custmer.coustmorId == Number(result['coustmorId']);

      });

    })
  // this.ARouter.queryParams.subscribe((result)=>{
  //     console.log("From QueryParams",result);

  //     this.coustmorInfo = result;


  //     let coustmorslist=this.coustmorservices.getcoustmorslist();
  //     this.selectedID=coustmorslist.filter((Custmer)=>{
  //       return Custmer.coustmorId == Number(result['ID']);
  //     })
  //   })
  //    this.ARouter.fragment.subscribe((result)=>{
  //     console.log("From fragment",result);

  //     this.coustmorInfo = result;


  //     let coustmorslist=this.coustmorservices.getcoustmorslist();
  //     this.selectedID=coustmorslist.filter((Custmer)=>{
  //       return Custmer.coustmorId == Number(result) ;
  //     });
  //   })
    
    

  }

}
