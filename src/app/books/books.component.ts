import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    console.log('ON init');
    this.getBooks();
  }
  booksArray = [];

  async getBooks() {
    await this.booksService.returnBooks().subscribe(
      {
        next: (v) => {
          console.log(v.books);
          this.booksArray = v.books;
        },
        complete: () => {
          console.log('Completed');
        },
        error: (e) => {
          console.log(e);
        },
      }
    );
  }

}
