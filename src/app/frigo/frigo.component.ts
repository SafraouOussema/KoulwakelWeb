import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { FrigoService } from '../services/frigo.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


declare const $: any;
declare const swal: any;
@Component({
  selector: 'app-frigo',
  templateUrl: './frigo.component.html',
  styleUrls: ['./frigo.component.css']
})
export class FrigoComponent implements OnInit {

  public selectedNiveau = null;
  constructor(private route: ActivatedRoute,
              private router: Router,private niveauService:FrigoService) {

  }

  niveaus: Array<any>;
  niv: any = {};
  delniv : any = {};
  gg : any = {};
  un : any = {};
  ui : any = {};
  ngOnInit() {

    this.loadData();



  }

  loadData(){
    this.niveauService.get().subscribe(data => {
      this.niveaus = data;
      console.log(this.niveaus);
    });
  }

  gotoList() {
    this.router.navigate(['/home/frigo']);
  }
}
