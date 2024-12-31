import { Component, ElementRef, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent  {
  // @Output() fileUploaded = new EventEmitter<File>();
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>; // Reference to the file input element

  triggerFileInput() {
    this.fileInput.nativeElement.click(); // Programmatically click the file input
  }

  fileName: string | null = null; // Property to store the file name
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name; // Store the file name
      console.log('Selected file:', file); // Log the selected file
    } else {
      this.fileName = null; // Clear the file name if no file is selected
    }
  }

}
