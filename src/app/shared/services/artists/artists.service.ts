import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG } from '../../config/config';
import { Artist } from '../../models/Artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  private API_URL: string = CONFIG.API_URL;

  constructor(private http: HttpClient) {}

  public getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.API_URL + 'artists/all');
  }

  public getArtistById(id: string): Observable<Artist> {
    return this.http.get<Artist>(this.API_URL + `artist/${id}`);
  }

  public addArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.API_URL + 'artist', artist);
  }

  public addArtists(artists: Artist[]): Observable<Artist[]> {
    return this.http.post<Artist[]>(this.API_URL + 'artist', artists);
  }
}
