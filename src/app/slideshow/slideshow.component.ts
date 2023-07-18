import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
 
export class SlideshowComponent implements OnInit {
  images = ['moped.jpeg', 'yako.jpeg', 'wacken.jpeg'];
  headlines = ['Bring Blackbeauty to the next level!', 'Chill to the next level!', 'Bring ROCK to the next level!'];
  currentImage = 0;
  showImage = true;
  
  
  ngOnInit() {
      this.updateImage();
  }
  
  
  updateImage() {
  
      setInterval(() => {
          this.currentImage++;
          this.currentImage = this.currentImage % this.images.length;
          this.showImage = false;
  
          setTimeout(() => {
            this.showImage = true;
          }, 10);
      }, 3000);
  }
  
  
  }
  