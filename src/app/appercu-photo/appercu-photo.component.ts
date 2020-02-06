import {Component, Input, OnInit} from '@angular/core';
import {PhotoService} from '../photo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-appercu-photo',
  templateUrl: './appercu-photo.component.html',
  styleUrls: ['./appercu-photo.component.css']
})
export class AppercuPhotoComponent implements OnInit {
@Input() photo;

  constructor(private photoService: PhotoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
