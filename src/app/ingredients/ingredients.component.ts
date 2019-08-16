import { Component, OnInit , ViewEncapsulation  } from '@angular/core';
import { IngrédientsService } from '../services/ingrédients.service'
import {PictureService} from '../services/picture.service'
import { TokenStorageService } from '../auth/token-storage.service';


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor(private pictureservice :PictureService, private  ingredientsService: IngrédientsService ,private token: TokenStorageService)
  { }
  etuds: any=null;
  tab :Array<any>;
  imageBlobUrl:Array<string>;
  cpt : number=1;
  ingredients: Array<any>;

  ngOnInit() {
    this.loadData();
   /* this.loadImg();*/

  }

  loadData(){
this.tab=new Array<any>();
this.imageBlobUrl=new Array<string>();
    this.ingredientsService.getAll().subscribe(data => {
      this.ingredients = data;
       this.ingredients.forEach(obj => {
         this.tab[this.cpt]=this.loadImg(obj.id,this.cpt);
         this.cpt++;
         //console.log("qq"+this.tab[0]);
       } );

      console.log(this.ingredients);
    });

  }

loadImg(id:string,index:number){
  this.pictureservice.get(id).subscribe(data => {
    this.etuds = data;

    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageBlobUrl[index] = reader.result;
    }, false);
    if (this.etuds) {
      reader.readAsDataURL(this.etuds);
    }

  });
}


}
