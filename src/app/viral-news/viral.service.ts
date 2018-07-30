import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ViralService{
    
    constructor( private _http:Http ){
        
    }
    getViral(){
        return this._http.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1763b1c5253842d197eb64061f12a2c1`)
                    .map((response:Response)=>response.json());
    }

    getTagedNews(param,date){

        return this._http.get(`https://newsapi.org/v2/everything?q=`+param+`&from=`+date+`&sortBy=popularity&apiKey=1763b1c5253842d197eb64061f12a2c1`)
                    .map((response:Response)=>response.json());
    }

    
}