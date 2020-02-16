"use strict";

const LibraryBook = function(_title, _year, _author) {
  const title = _title;
  const year = _year;
  const author = _author;
  let readerName = null;
  let readerData = null;

  function giveTheBook(client, data = new Date()) {
    readerName = client;
    readerData = data;
  }

  this.getBookInfo = function() {
    const message = readerData ? `выдана на руки` : `есть в наличии`;
    console.info(`${author}, ${title}, ${year}: ${message}`);
  };

  this.getTheBook = function(client, data) {
    if (readerData) {
      return null;
    } else {
      giveTheBook(client, data);
    }
  };

  this.returnBook = function() {
    readerName = null;
    readerData = null;
  };
};

const books = [];
books[0] = new LibraryBook("Война и мир", "1995", "Лев Толстой");
books[1] = new LibraryBook("Отцы и дети", "1998", "Тургенев");
books[2] = new LibraryBook("Кобзарь", "2005", "Тарас Шевченко");

console.log(books);
console.log(books[0]);

books[0].getBookInfo();
books[0].getTheBook("Иван Сидоренко", new Date(2018, 6, 25));
books[0].getBookInfo();
books[0].returnBook();
books[0].getBookInfo();
