import { Component, OnInit } from '@angular/core';

declare function require(filename: string): string;

class Author {
  id: string;
  name: string;
  url: string;
  email: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  constructor() {
  }

  items: Author[] = [
    {
      id: '1',
      name: 'Olive Walsh',
      url: '#',
      email: 'olive.walsh@gmail.com',
      avatarUrl: require('./_images/olive.png'),
    },
    {
      id: '2',
      name: 'Dorothy Roberts',
      url: '#',
      email: 'dorothy.roberts@gmail.com',
      avatarUrl: require('./_images/dorothy.png'),
    },
    {
      id: '3',
      name: 'Mark Griffin',
      url: '#',
      email: 'mark.griffin@gmail.com',
      avatarUrl: require('./_images/mark.png'),
    },
    {
      id: '4',
      name: 'Antonio Figueroa',
      url: '#',
      email: 'antonio.figueroa@gmail.com',
      avatarUrl: require('./_images/antonio.png'),
    },
  ];

  ngOnInit() {
  }

}
