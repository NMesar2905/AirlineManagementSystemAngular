import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES } from '../../routes.constants';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  ROUTES = ROUTES;
}
