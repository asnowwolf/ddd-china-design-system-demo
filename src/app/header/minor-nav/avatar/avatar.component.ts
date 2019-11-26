import { Component, OnInit } from '@angular/core';

declare function require(file: string): string;

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  constructor() {
  }

  image = require('./avatar.png');

  ngOnInit() {
  }

}
