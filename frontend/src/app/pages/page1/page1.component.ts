import { Component } from '@angular/core';
import { Template1Component } from '../../components/template1/template1.component';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [Template1Component],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
})
export class Page1Component {}
