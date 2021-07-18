import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-artist-dialog',
  templateUrl: './create-artist-dialog.component.html',
  styleUrls: ['./create-artist-dialog.component.scss'],
})
export class CreateArtistDialogComponent implements OnInit {
  public artistForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    photoUrl: new FormControl(''),
    birthdate: new FormControl(''),
    deathDate: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<CreateArtistDialogComponent>) {}

  ngOnInit(): void {}

  public onSubmit() {
    if (this.artistForm.valid) {
      this.dialogRef.close(this.artistForm.value);
    }
  }
}
