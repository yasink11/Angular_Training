import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  data=[
    {name:'Hüseyin',age:25 , job:'Frontend Developer', employed:'Hayır'},
    {name:'Müleyke',age:26 , job:'Yapay Zeka Mühendisi', employed:'Hayır'},
    {name:'Yasin',  age:26 , job:'Fullstack Developer', employed:'Hayır'},
    {name:'Kadir',  age:26 , job:'Fullstack Developer', employed:'Hayır'}
  ];
  headers=[
    {key:'name', label:'İsim'},
    {key:'age', label:'Yaş'},
    {key:'job', label:'Meslek'},
    {key:'employed', label:'Aldığı ücretten memnun mu?'}
  ]

}
