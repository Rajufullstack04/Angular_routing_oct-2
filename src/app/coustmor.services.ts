import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class CoustmorServices{
    getcoustmors(){
        return [
            {       
             coustmorId : 1,
             coustmorName : "raju",
             age : 25,
             coustmorlocation : "kadiri"
            },
             {       
              coustmorId : 2,
             coustmorName : "venky",
             age : 29,
             coustmorlocation : "hyb"
            }]

    }
    getcoustmorslist(){
        return [
            {       
             coustmorId : 1,
             coustmorName : "raju",
             age : 25,
             coustmorlocation : "kadiri"
            },
             {       
              coustmorId : 2,
             coustmorName : "venky",
             age : 29,
             coustmorlocation : "hyb"
            }

        ]
    }

}









