import { Component, OnInit } from '@angular/core';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-cindex',
  templateUrl: './cindex.component.html',
  styleUrls: ['./cindex.component.css']
})

export class CIndexComponent implements OnInit {

  cocktailList: ICocktail[] = []

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getAllCocktails().subscribe(
      response => {
        console.log(response)
        this.cocktailList = response.data
      },
      err => console.log(err)
    )
  }

  delete(cid: number | undefined): void{
    this.cocktailService.deleteCocktail(cid).subscribe(
      () => {
        this.cocktailList = this.cocktailList.filter(c => c.id !== cid)
      },
      err => console.log(err)
    )
  }

}
