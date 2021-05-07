import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-package-alerts',
  templateUrl: './package-alerts.component.html',
  styleUrls: ['./package-alerts.component.css']
})
export class PackageAlertsComponent implements OnInit {

  @Input() package: any;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
