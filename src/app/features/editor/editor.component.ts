import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWigModule } from 'ngx-wig';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, NgxWigModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {}
