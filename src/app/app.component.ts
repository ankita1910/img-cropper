import { Component, ViewChild, OnInit } from '@angular/core';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import { ImgService } from './img.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'img-cropper'
  croppedImage: any = ''
  imageBase64: any
  imgState:string

  constructor (private imgService: ImgService) {
    this.imgState = 'default'
  }

  ngOnInit () {
  }

  imageCropped (event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded (event) {}

  getImageBase64 (imgBlob) {
    let myReader: FileReader = new FileReader()

    myReader.onloadend = (e) => {
      this.imageBase64 = myReader.result
    }

    myReader.readAsDataURL(imgBlob)
  }

  imgClicked () {
    this.imgService.getImgDataUrl('http://localhost:4200/assets/demo-image.jpg').subscribe((data) => {
      this.imgState = 'crop'
      this.getImageBase64(data)
    })
  }

  saveImg () {
    let imgBlob = new Blob([this.imageBase64], { type: 'image/png' })
    console.log('imgBlob after save', imgBlob)
  }

  loadImageFailed(){}
}
