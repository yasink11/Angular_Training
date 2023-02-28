import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listshome',
  templateUrl: './listshome.component.html',
  styleUrls: ['./listshome.component.scss']
})
export class ListshomeComponent implements OnInit {
  numbers=[
    {value:50, label:'Müşteri'},
    {value:'3500 TL', label:'Ciro'},
    {value:65, label:'Yorumlar'},
  ];
  images=[
    {
      image:'./assets/svg/dresser.jpg',
      title:'Şifonyer',
      description:'Eşyaları koyabileceğiniz şifonyer'
    },
    {
      image:'./assets/svg/couch.jpg',
      title:'Kanepe',
      description:'Konforlu koltuk'
    }
  ]
  constructor(){}

  ngOnInit():void{

  }

}
