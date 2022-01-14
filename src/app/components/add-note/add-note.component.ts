import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  hide = true;
  noteColor = "#fff";
  pinned = false;
  isReminder = false;
  Reminder = "";
  isClose = true;
  NoteForm !: FormGroup

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.NoteForm = new FormGroup({
      Title: new FormControl(),
      Description: new FormControl()
    });
  }

  RemoveReminder() {
    this.isReminder = false;
    this.snackBar.open('Reminder Deleted', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
  }
  pinNote() {
    this.snackBar.open(`${this.pinned ? 'Note unpinned' : 'Note Pinned'}`, '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
    this.pinned = !this.pinned;

  }

}
