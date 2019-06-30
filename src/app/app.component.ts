import { Component } from '@angular/core';
import { VideoUploadService } from './video-upload.service';
import { IResult } from 'src/interface/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'knowhere-web-app';
  response: string = '';
  constructor(private videoUploadService: VideoUploadService) {
  }

  async fileChangeEvent(event: any) {
    var files = event.target.files;

    if (files.length > 0) {
      var formData = new FormData();
      formData.append('upl', files[0]);

      try {
        this.response = 'Uploading...';
        const result: IResult = await this.videoUploadService.upload(formData);
        console.log(result);
        this.response = result.message;

      } catch (err) {
        console.log(err);
      }
    }
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
        resolve(reader.result)
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
        reject(error);
      };
    })
  }
}
