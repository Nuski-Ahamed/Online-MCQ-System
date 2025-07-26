import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, CommonModule, RouterOutlet],
  templateUrl: './dashboard.html',
  styles: ``
})
export class Dashboard {

}
