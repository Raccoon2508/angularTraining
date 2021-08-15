import { Component } from '@angular/core';

@Component({
    selector: 'app-server',    
    templateUrl: './server.component.html'
})

export class ServerComponent {
    allowNewServer = false;
    serverId = 10;
    serverStatus = 'offline';

    GetServerStatus() {
        return this.serverStatus;
    }
}