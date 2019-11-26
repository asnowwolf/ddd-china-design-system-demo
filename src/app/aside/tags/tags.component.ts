import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  constructor() {
  }

  items: string[] = [
    'UX',
    'UI Design',
    'UI',
    'Sketch App',
    'Auto Layout',
    'Design',
    'Marketing',
    'Illustration',
    'Visualization',
  ];

  ngOnInit() {
  }

}
