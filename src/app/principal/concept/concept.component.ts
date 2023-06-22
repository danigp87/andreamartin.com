import { Component } from '@angular/core';
import { ArraysService } from '@app/arrays.service';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.less']
})

export class ConceptComponent {

  constructor(private arraysService: ArraysService) {
    this.conceptArray = this.arraysService.conceptArray
  }

  conceptArray: string[]

  currentImage!: string;
  zoomed: boolean = false;
  zoom(image: string) {
    this.currentImage = image;
    this.zoomed = true;
  }

  previousImage(event: Event) {
    event.stopPropagation();
    const currentIndex = this.conceptArray.indexOf(this.currentImage);
    if (currentIndex > 0) {
      this.currentImage = this.conceptArray[currentIndex - 1];
    }
  }
  nextImage(event: Event) {
    event.stopPropagation();
    const currentIndex = this.conceptArray.indexOf(this.currentImage);
    if (currentIndex < this.conceptArray.length - 1) {
      this.currentImage = this.conceptArray[currentIndex + 1];
    }
  }
  isFirstImage(): boolean {
    return this.conceptArray.indexOf(this.currentImage) === 0;
  }
  isLastImage(): boolean {
    return this.conceptArray.indexOf(this.currentImage) === this.conceptArray.length - 1;
  }

  closeZoom() {
    this.zoomed = false;
  }

}
