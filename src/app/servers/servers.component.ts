import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverStatus = 'offline';
  serverName = '';
  constructor() { 
    setTimeout(() => this.allowNewServer = true, 3000);
  }

  ngOnInit(): void {
  }

  OnCreateServer() {
    this.serverStatus = 'Server is created!'
  }

  OnUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
