import { Component } from '@angular/core';
import { ArraysService } from '@app/arrays.service';

@Component({
  selector: 'app-tattoo',
  templateUrl: './tattoo.component.html',
  styleUrls: ['./tattoo.component.less']
})
export class TattooComponent {

  tattooArray: string[]

  constructor(private arraysService: ArraysService) {
    this.tattooArray = this.arraysService.tattooArray
  }

  currentImage!: string;
  zoomed: boolean = false;
  zoom(image: string) {
    this.currentImage = image;
    this.zoomed = true;
  }

  previousImage(event: Event) {
    event.stopPropagation();
    const currentIndex = this.tattooArray.indexOf(this.currentImage);
    if (currentIndex > 0) {
      this.currentImage = this.tattooArray[currentIndex - 1];
    }
  }
  nextImage(event: Event) {
    event.stopPropagation();
    const currentIndex = this.tattooArray.indexOf(this.currentImage);
    if (currentIndex < this.tattooArray.length - 1) {
      this.currentImage = this.tattooArray[currentIndex + 1];
    }
  }
  isFirstImage(): boolean {
    return this.tattooArray.indexOf(this.currentImage) === 0;
  }
  isLastImage(): boolean {
    return this.tattooArray.indexOf(this.currentImage) === this.tattooArray.length - 1;
  }

  closeZoom() {
    this.zoomed = false;
  }

}
