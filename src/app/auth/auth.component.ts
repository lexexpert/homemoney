import {Component, HostBinding, OnInit} from '@angular/core';
import {fadeStateTrigger} from '../shared/animations/fade.animation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  animations: [fadeStateTrigger]
})

export class AuthComponent {
  @HostBinding('@fade') a = true;
}
