import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Album } from '../shared/models/Album';
import { Artist } from '../shared/models/Artist';
import { Item } from '../shared/models/Items';
import { AlbumsService } from '../shared/services/albums/albums.service';
import { ArtistsService } from '../shared/services/artists/artists.service';
import { map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-listen-now',
  templateUrl: './listen-now.component.html',
  styleUrls: ['./listen-now.component.scss'],
})
export class ListenNowComponent implements OnInit {
  public albums: Item[] = [];
  public artists: Item[] = [];

  constructor(
    private albumService: AlbumsService,
    private artistsService: ArtistsService
  ) {}

  ngOnInit(): void {
    if (this.albums.length === 0) {
      this.albumService
        .getAlbums()
        .subscribe((value) => this.formatAlbum(value));
    }

    if (this.artists.length === 0) {
      this.artistsService
        .getArtists()
        .subscribe((value) => this.formatArtist(value));
    }
  }

  private formatArtist(artists: Artist[]): void {
    if (artists.length > 0) {
      from(artists)
        .pipe(
          map<Artist, Item>((_): Item => {
            return { label: _.name, imgUrl: _.photoUrl };
          })
        )
        .subscribe((value) => this.artists.push(value));
    }
  }

  private formatAlbum(albums: Album[]): void {
    if (albums.length > 0) {
      from(albums)
        .pipe(
          map<Album, Item>((_): Item => {
            return { label: _.title, imgUrl: _.coverUrl };
          })
        )
        .subscribe((value) => this.albums.push(value));
    }
  }
}
