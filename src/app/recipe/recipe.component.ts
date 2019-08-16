import { Component, OnInit , ViewEncapsulation  } from '@angular/core';
import { RecipeService } from '../services/recipe.service'
import { TokenStorageService } from '../auth/token-storage.service';
import {PictureRecipeService} from '../services/picture-recipe.service';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private pictureRecipeService :PictureRecipeService, private  recipeService: RecipeService ,private token: TokenStorageService)
  { }
  etuds: any=null;
  tab :Array<any>;
  imageBlobUrl:Array<string>;
  cpt : number=1;
  ingredients: Array<any>;
  pic: Array<any>;

  ngOnInit() {
    this.loadData();
    /* this.loadImg();*/
    this.loadDataim();
  }


  loadDataim(){


    this.pictureRecipeService.getAll().subscribe(data => {
      this.pic = data;
      console.log(this.pic);
    });

  }



  loadData(){
    this.tab=new Array<any>();
    this.imageBlobUrl=new Array<string>();
    this.recipeService.getAll().subscribe(data => {
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
    this.pictureRecipeService.get(id).subscribe(data => {
      this.etuds = data;
 console.log(this.etuds);
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
