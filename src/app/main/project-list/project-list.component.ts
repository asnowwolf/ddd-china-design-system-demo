import { Component, OnInit } from '@angular/core';
import { Project } from './models/project';
import { Status } from './models/status';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  constructor() {
  }

  items: Project[] = [
    {
      name: 'Project 1',
      description: 'Project Description is a formally written declaration of the project and its idea and context to explain the goals and objectives to be reached...',
      taskCount: 15,
      completionRate: 0.8,
      memberCount: 3,
      status: Status.Active,
    },
    {
      name: 'Project 2',
      description: 'Project Description is a formally written declaration of the project and its idea and context to explain the goals and objectives to be reached...',
      taskCount: 15,
      completionRate: 0.8,
      memberCount: 3,
      status: Status.Past,
    },
    {
      name: 'Project 3',
      description: 'Project Description is a formally written declaration of the project and its idea and context to explain the goals and objectives to be reached...',
      taskCount: 15,
      completionRate: 0.1,
      memberCount: 3,
      status: Status.Draft,
    },
    {
      name: 'Project 4',
      description: 'Project Description is a formally written declaration of the project and its idea and context to explain the goals and objectives to be reached...',
      taskCount: 15,
      completionRate: 0.1,
      memberCount: 3,
      status: Status.Draft,
    },
    {
      name: 'Project 5',
      description: 'Project Description is a formally written declaration of the project and its idea and context to explain the goals and objectives to be reached...',
      taskCount: 15,
      completionRate: 1,
      memberCount: 3,
      status: Status.Completed,
    },
    {
      name: 'Project 6',
      description: 'Project Description is a formally written declaration of the project and its idea and context to explain the goals and objectives to be reached...',
      taskCount: 15,
      completionRate: 1,
      memberCount: 3,
      status: Status.Completed,
    },
  ];

  ngOnInit() {
  }

}
