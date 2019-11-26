import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { Status } from '../models/status';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {

  constructor() {
  }

  @Input()
  item: Project;

  get css(): string {
    if (!this.item) {
      return 'unknown';
    }
    return statusToCssMap[this.item.status];
  }

  ngOnInit() {
  }

}

const statusToCssMap = {
  [Status.Active]: 'primary',
  [Status.Draft]: 'secondary',
  [Status.Past]: 'danger',
  [Status.Completed]: 'success',
};
