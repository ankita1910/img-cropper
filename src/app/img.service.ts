import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private http: HttpClient) { }

  getImgDataUrl (imgUrl: string): Observable<Blob> {
    return this.http
      .get(imgUrl, { responseType: 'blob' })
      .pipe(map (data => {
        return data
      }))
  }
}
