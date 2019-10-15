import { Component, OnInit , ViewEncapsulation  } from '@angular/core';
import { RecipeService } from '../services/recipe.service'
import { TokenStorageService } from '../auth/token-storage.service';
import {PictureRecipeService} from '../services/picture-recipe.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private router: Router,private pictureRecipeService :PictureRecipeService, private  recipeService: RecipeService ,private token: TokenStorageService)
  { }
  imageBlobUrl:Array<string>;
  gcs: any=null;
  steps: any[]=null;
  ins: any=null;
  etuds: any=null;
  var:number=0;

  ings: any=null;

  ngOnInit() {
    this.loadData();

  }


  loadData(){
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadImg(id);
      this.recipeService.getrecipid(id).subscribe(data => {
        this.gcs = data;
        console.log(this.gcs);
      });
        this.recipeService.getingreid(id).subscribe(data =>{
        this.ings =data;
        console.log(this.ings);
        });
      this.recipeService.getstepid(id).subscribe(data => {
        this.steps = data;

        for (let i = 0; i < this.steps.length; i++) {
          console.log("aaaa" + this.steps[i].id);
          this.recipeService.getinstructionid(this.steps[i].id).subscribe(data => {
            this.ins = data;

            console.log(this.ins);

          });
        }

        console.log(this.steps);
      });

    });

  }

  loadImg(id:string){
    this.pictureRecipeService.get(id).subscribe(data => {
      this.etuds = data;

      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.imageBlobUrl = reader.result;
      }, false);
      if (this.etuds) {
        reader.readAsDataURL(this.etuds);
      }

    });
  }



}
