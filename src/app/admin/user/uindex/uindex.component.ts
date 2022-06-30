import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uindex',
  templateUrl: './uindex.component.html',
  styleUrls: ['./uindex.component.css']
})
export class UIndexComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:9000/users').subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

}
