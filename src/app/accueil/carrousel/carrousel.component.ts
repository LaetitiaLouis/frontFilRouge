import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../service/photo.service';
import {Photo} from '../../model/photo';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
photos: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getAllPhotos().subscribe(photosResult => this.photos = photosResult);
  }

}
