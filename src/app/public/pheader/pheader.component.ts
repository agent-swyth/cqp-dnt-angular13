import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.css']
})
export class PheaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  admin() {
    this.router.navigate(['admin'])
  }

}
