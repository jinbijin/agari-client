import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxsModule } from '@ngxs/store';
import { TournamentCreatorComponent } from './tournament-creator.component';

@NgModule({
  declarations: [TournamentCreatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [TournamentCreatorComponent],
})
export class TournamentCreatorModule {}
