import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  constructor(private http: HttpClient) { }

  upload(body) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/upload', body)
        .subscribe((result) => {
          resolve(result);
        }, (err) => {
          reject(err);
        })
    })
  }
}
