import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main_app';
  viewContainer: ViewContainerRef;

  constructor(public viewContainerRef: ViewContainerRef) {
    this.viewContainer = viewContainerRef;
  }

  async load(): Promise<void> {
    console.log("clicked!");

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      exposedModule: './AppComponent'
    });

    console.log(m.AppComponent);

    const ref = this.viewContainer.createComponent(m.AppComponent);
    // const compInstance = ref.instance;
}
}
