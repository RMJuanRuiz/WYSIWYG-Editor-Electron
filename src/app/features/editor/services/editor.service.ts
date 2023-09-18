import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electronyzer';

@Injectable()
export class EditorService {
  constructor(private electronService: ElectronService) {}

  getContent(): Promise<string> {
    return this.electronService.ipcRenderer.invoke('getContent');
  }

  setContent(content: string): void {
    this.electronService.ipcRenderer.invoke('setContent', content);
  }
}
