import { Component } from '@angular/core';
import { ArraysService } from '@app/arrays.service';

@Component({
  selector: 'app-ilustration',
  templateUrl: './ilustration.component.html',
  styleUrls: ['./ilustration.component.less']
})
export class IlustrationComponent {

  ilusArray: string[]

  constructor(private arraysService: ArraysService) {
    this.ilusArray = this.arraysService.ilusArray
  }
  
  currentImage!: string;
  zoomed: boolean = false;
  zoom(image: string) {
    this.currentImage = image;
    this.zoomed = true;
  }

  previousImage(event: Event) {
    event.stopPropagation();
    const currentIndex = this.ilusArray.indexOf(this.currentImage);
    if (currentIndex > 0) {
      this.currentImage = this.ilusArray[currentIndex - 1];
    }
  }
  nextImage(event: Event) {
    event.stopPropagation();
    const currentIndex = this.ilusArray.indexOf(this.currentImage);
    if (currentIndex < this.ilusArray.length - 1) {
      this.currentImage = this.ilusArray[currentIndex + 1];
    }
  }
  isFirstImage(): boolean {
    return this.ilusArray.indexOf(this.currentImage) === 0;
  }
  isLastImage(): boolean {
    return this.ilusArray.indexOf(this.currentImage) === this.ilusArray.length - 1;
  }

  closeZoom() {
    this.zoomed = false;
  }

}
