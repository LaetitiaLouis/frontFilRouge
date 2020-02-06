import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilisateurService} from '../utilisateur.service';
import {Utilisateur} from '../model/utilisateur';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {
  @Input() utilisateur;

  constructor(private utilisateurService: UtilisateurService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.utilisateurService.getUserById(this.utilisateur.id).subscribe(
        utilisateur => this.utilisateur = utilisateur
      )
    );
  }

}
