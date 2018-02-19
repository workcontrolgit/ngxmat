import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { UserService } from '../../services/user.service';
import { UsertableComponent } from './usertable.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatTableModule
  ],
  declarations: [UsertableComponent],
  providers: [UserService],
  exports: [UsertableComponent]
})
export class UsertableModule { }
