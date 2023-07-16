import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { InternalRoutingModule } from './internal-routing.module';
import { InternalComponent } from './internal/internal.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [InternalComponent, HelloComponent],
  imports: [
    CommonModule,
    InternalRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    NgFor,
    MatListModule,
  ],
})
export class InternalModule {}
