/**
 * This component will render header of the Application
 */

import { Component } from "@angular/core";

@Component({
  selector: ".bg-header",
  template: `
  <nav class="nav-bar">
    <div class="container-fluid">
      <div class="nav-title">
        <span class="pop-movies-label" href="#">Pop Movies</span>
        <i class="fa fa-ellipsis-v fa-3x dots pull-right" aria-hidden="true"></i>
      </div>
    </div><!-- /.container-fluid -->
  </nav>
  `,
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent { }
