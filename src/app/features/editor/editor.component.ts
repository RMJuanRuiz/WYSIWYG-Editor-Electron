import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxWigModule } from 'ngx-wig';

import { EditorService } from './services/editor.service';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, FormsModule,NgxWigModule],
  providers: [EditorService],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit{
  myContent = '';

  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.getContent();
  }

  saveContent(content: string) {
    this.editorService.setContent(content);
  }

  private async getContent() {
    this.myContent = await this.editorService.getContent();
  }
}
