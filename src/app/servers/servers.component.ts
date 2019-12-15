import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  displayToggleButton = false;
  toggleButtonCountArray = [];
  toggleButtonCount = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

   ngOnInit() {
  }

   onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =  'Server was created! Name is ' + this.serverName;
  }

   onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onUserReset() {
    if (this.userName.length > 0 ) {
      this.userName = '';
    }
  }

  onToggleButton() {
    this.displayToggleButton = !this.displayToggleButton;
    this.toggleButtonCountArray.push(this.toggleButtonCount += 1);
  }



}
