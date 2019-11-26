import { Component, OnInit } from '@angular/core';

class ExternalLink {
  name: string;
  url: string;
  logoUrl: string;
}

declare function require(filename: string): string;

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  constructor() {
  }

  items: ExternalLink[] = [
    {
      name: 'Twitter',
      url: '#',
      logoUrl: require('./_images/twitter.svg'),
    },
    {
      name: 'Facebook',
      url: '#',
      logoUrl: require('./_images/facebook.svg'),
    },
    {
      name: 'Instagram',
      url: '#',
      logoUrl: require('./_images/instagram.svg'),
    },
    {
      name: 'Dribbble',
      url: '#',
      logoUrl: require('./_images/dribbble.svg'),
    },
  ];

  ngOnInit() {
  }

}
