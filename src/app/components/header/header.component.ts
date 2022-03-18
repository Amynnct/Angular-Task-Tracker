import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  subscription!: Subscription; 

  constructor(private uiServeice: UiService, private router:Router) { 
    this.subscription = this.uiServeice.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    //this.showAddTask = !this.showAddTask;
    this.uiServeice.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url == route;
  }
}
