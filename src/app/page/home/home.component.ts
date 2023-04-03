import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
/*
  constructor(private router:Router){}

  public pages2=[{
    pageTitle:'Početna',
    link:'home',
    subPages:[]
  },
  {
  pageTitle: 'O nama',
  link: 'about',
  subPages:[
      {
        pageTitle:"Nasi projekti",
        link:"about"
      }
    ]
  }
]

  */


  ngOnInit(): void {
   
  }
  /*
  subPageClick(item: any){
    
    this.router.navigate(["/"+item])
  }
  */
}
