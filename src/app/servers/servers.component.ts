import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

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
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

   onCreateServer() {
     this.serverCreationStatus =  'Server was created! Name is ' + this.serverName;
  }

   onUpdateServerName (event: any) {
    this.serverName = event.target.value;
  }

  onUserReset () {
    if (this.userName.length>0) {
      this.userName = '';
    }

  }

  ngOnInit() {
  }

}
