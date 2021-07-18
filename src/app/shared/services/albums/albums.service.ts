import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG } from '../../config/config';
import { Album } from '../../models/Album';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private API_URL: string = CONFIG.API_URL;

  constructor(private http: HttpClient) {}

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.API_URL + 'albums/all');
  }

  public getAlbumById(id: string): Observable<Album> {
    return this.http.get<Album>(this.API_URL + `album/${id}`);
  }

  public addAlbum(Album: Album): Observable<Album> {
    return this.http.post<Album>(this.API_URL + 'album', Album);
  }

  public addAlbums(Albums: Album[]): Observable<Album[]> {
    return this.http.post<Album[]>(this.API_URL + 'album', Albums);
  }
}
