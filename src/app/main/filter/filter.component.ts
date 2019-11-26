import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {
  }

  statusList: string[] = [
    'Active',
    'Draft',
    'Past Due',
    'Completed',
  ];

  teamMembers: string[] = [
    'Olive Walsh',
    'Dorothy Roberts',
    'Mark Griffin',
  ];

  visibilities: string[] = [
    'All Projects',
    'Only Mine',
  ];

  clients: string[] = [
    'Acmecorp Ltd.',
    'Medialink',
    'Marketizor, LLC',
  ];

  ngOnInit() {
  }

}
