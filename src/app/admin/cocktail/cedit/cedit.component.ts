import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-cedit',
  templateUrl: './cedit.component.html',
  styleUrls: ['./cedit.component.css']
})
export class CEditComponent implements OnInit {

  cocktail: ICocktail = {
    user_id: 1,
    nom: '',
    description: '',
    recette: ''
  }

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {
    // Récupération du param url
    let cid = this.activated.snapshot.paramMap.get('cid')
    // Récupération des données de l'API
    this.cocktailService.getCocktail(cid).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

  onSubmit(){
    this.cocktailService.updateCocktail(this.cocktail).subscribe(
      data => this.router.navigate(['admin/cocktails']),
      err => console.log(err)
    )
  }

}
