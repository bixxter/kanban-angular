import { Component } from '@angular/core';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent {
  isHovering!: boolean;

  files: any = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i)!);
    }
  }

  onFileChange(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
    }
  }

  onClick(event: boolean) {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;

    input.onchange = (event: Event) => {
      const files = (event.target as HTMLInputElement).files;
      for (let i = 0; i < files!.length; i++) {
        this.files.push(files![i]);
      }
    };

    input.click();
  }

  removeFile(file: any) {
    const index = this.files.indexOf(file);
    this.files.splice(index, 1);
  }
}
