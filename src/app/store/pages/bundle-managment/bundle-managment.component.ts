import { Component } from '@angular/core';
import {BundleListComponent} from "../../components/bundle-list/bundle-list.component";

@Component({
  selector: 'app-bundle-managment',
  standalone: true,
  imports: [
    BundleListComponent
  ],
  templateUrl: './bundle-managment.component.html',
  styleUrl: './bundle-managment.component.css'
})
export class BundleManagmentComponent {

}
