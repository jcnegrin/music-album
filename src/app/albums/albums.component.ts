import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Album } from '../shared/models/Album';
import { Artist } from '../shared/models/Artist';
import { AlbumsService } from '../shared/services/albums/albums.service';
import { ArtistsService } from '../shared/services/artists/artists.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  public albums: Album[] = [];

  constructor(
    private albumsService: AlbumsService,
    private artistsService: ArtistsService
  ) {}

  ngOnInit(): void {
    if (this.albums.length === 0) {
      this.albumsService
        .getAlbums()
        .subscribe((value) => (this.albums = value));
    }
  }
}
