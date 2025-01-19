import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatFormFieldModule,MatInputModule,MatDatepickerModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-p1';
  date = new FormControl(new Date());
 // serializedDate = new FormControl((new Date()).toISOString());
  serializedDate = new FormControl((new Date().toISOString()));


}
function formatISODate(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

//const today = new Date();
//console.log(formatISODate(today));


