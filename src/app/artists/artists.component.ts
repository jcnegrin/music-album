import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateArtistDialogComponent } from '../shared/components/create-artist-dialog/create-artist-dialog.component';
import { Artist } from '../shared/models/Artist';
import { ArtistsService } from '../shared/services/artists/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  public artists: Artist[] = [];

  constructor(
    private artistsService: ArtistsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.artists.length === 0) {
      this.artistsService
        .getArtists()
        .subscribe((value) => (this.artists = value));
    }
  }

  public openCreateDialog(): void {
    let dialogRef = this.dialog.open(CreateArtistDialogComponent);

    dialogRef.afterClosed().subscribe((result: Artist) => {
      this.createArtist(result);
    });
  }

  private createArtist(artist: Artist): void {
    this.artistsService.addArtist(artist).subscribe((result) => {
      this.artists.push(result);
    });
  }

  public onDeleteArtist(artist: Artist): void {
    if (artist) {
      this.deleteArtist(artist._id);
    }
  }

  private deleteArtist(id: string) {
    this.artistsService.deleteArtist(id).subscribe((deletedArtist) => {
      const tempArray: Artist[] = [];
      this.artists.forEach((element) => {
        if (element._id !== deletedArtist._id) {
          tempArray.push(element);
        }
      });

      this.artists = tempArray;
    });
  }
}
