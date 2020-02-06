import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';
import {ActivatedRoute} from '@angular/router';
import {Photo} from '../model/photo';

@Component({
  selector: 'app-affichage-photo',
  templateUrl: './affichage-photo.component.html',
  styleUrls: ['./affichage-photo.component.css']
})
export class AffichagePhotoComponent implements OnInit {
photo: Photo;
  constructor(private photoService: PhotoService,
              private route: ActivatedRoute)  { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.photoService.getPhotoById(+params.get('id')).subscribe(
        (photo: Photo) => this.photo = photo
      )
    );
  }

}
