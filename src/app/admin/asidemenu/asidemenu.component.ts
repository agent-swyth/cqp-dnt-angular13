import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asidemenu',
  templateUrl: './asidemenu.component.html',
  styleUrls: ['./asidemenu.component.css']
})
export class AsidemenuComponent implements OnInit {

  menu = [
    { name: "Accueil", path: "/" },
    { name: "Dashboard", path: "dashboard" },
    {
      name: "User", children: [
        { name: "Liste", path: "user/index" },
        { name: "Ajouter", path: "user/add" }
      ]
    },
    {
      name: "Cocktail", children: [
        { name: "Liste", path: "cocktail" },
        { name: "Ajouter", path: "cocktail/add" }
      ]
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
