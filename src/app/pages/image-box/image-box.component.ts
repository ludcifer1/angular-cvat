import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fabric } from 'fabric';
import { FakeDataService } from 'src/app/services/fakeDataService.service';
import { CanvasRect } from 'src/app/models/canvasRect.model';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements OnInit {

  @ViewChild('image', { static: false })
  imgElement: HTMLImageElement;

  private canvas;
  private shape;
  scaleImage: number;
  imageOrginalWidth: number;
  imageOrginalHeight: number;
  resizeImg: fabric.Image;
  imageLink = 'https://imgur.com/Fm9NeGr.jpg';
  currentImg: any;

  constructor(private el: ElementRef, private fakeDataService: FakeDataService) { }

  ngOnInit() {
    this.drawCanvasBox();

    this.fakeDataService.fetchData().subscribe(
      res => {
        //this.setCanvasDimenson(res.images[0].width, res.images[0].height);
        // this.calcScale(res.images[0].width, res.images[0].height);
        this.currentImg = res.images[0];

        fabric.Image.fromURL(this.imageLink, (oImg) => {
          this.resizeImg = oImg;
          this.imageOrginalWidth = oImg.width;
          this.imageOrginalHeight = oImg.height;
          this.calcScale(this.imageOrginalWidth, this.imageOrginalHeight);
          this.setCanvasDimenson(this.imageOrginalWidth, this.imageOrginalHeight);
          this.resizeImg.scaleToWidth(this.imageOrginalWidth * this.scaleImage);
          this.resizeImg.scaleToHeight(this.imageOrginalHeight * this.scaleImage);
          this.canvas.setBackgroundImage(this.resizeImg, this.canvas.renderAll.bind(this.canvas));
        });
      });

    setTimeout(() => {
      const shapeArr = this.currentImg.boxes;
      shapeArr.map(shape => this.drawRectBox(new CanvasRect(shape)));
    }, 300);

  }

  private drawCanvasBox() {
    this.canvas = new fabric.Canvas('canvas', {
    });
  }

  private calcScale(imgWidth: number, imgHeight: number) {
    let componentHeight = 0;
    let componentWidth = 0;
    componentHeight = this.el.nativeElement.parentElement.clientHeight;
    componentWidth = this.el.nativeElement.parentElement.clientWidth - 30;

    const scaleX = componentWidth / imgWidth;
    const scaleY = componentHeight / imgHeight;
    this.scaleImage = scaleX <= scaleY ? scaleX : scaleY;
  }


  private setCanvasDimenson(imgWidth: number, imgHeight: number) {
    this.canvas.setDimensions({ width: imgWidth * this.scaleImage, height: imgHeight * this.scaleImage });
  }

  private drawRectBox(shape?: CanvasRect, scale?: number) {
    this.scaleImage = 0.9375;
    this.shape = new fabric.Rect({
      top: shape.top * this.scaleImage,
      left: shape.left * this.scaleImage,
      width: shape.width * this.scaleImage,
      height: shape.height * this.scaleImage,
      fill: 'transparent',
      stroke: 'red',
      strokeWidth: 2
    }).setCoords();
    this.canvas.add(this.shape);
    // TODO: Add created shape to product boxes arr for furthur mangement
  }
}




