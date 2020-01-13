import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ImageControllerComponent } from './image-controller/image-controller.component';
import { ImageObjectHolderComponent } from './image-object-holder/image-object-holder.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [ImageControllerComponent, ImageObjectHolderComponent, ImageBoxComponent, ContainerComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    ImageControllerComponent, ImageObjectHolderComponent, ImageBoxComponent, ContainerComponent
  ]
})
export class PagesModule { }
