class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        if (this.state < 100) {
            this.state = Math.min(this.state * 1.5, 100);
        }
    }


    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "detective";
    }
}


class Library {
    constructor(name, books) {
        this.name = name;
        books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
    

}

}

const issuedBook = library.giveBookByName("Руслан и Людмила");
if (issuedBook) {
  damagedBook.state = 10; 
  console.log(`Книга "${issuedBook.name}" повреждена, состояние: ${issuedBook.state}`);
  
  issuedBook.fix();
  console.log(`Книга "${issuedBook.name}" восстановлена, состояние: ${issuedBook.state}`);
  
  library.addBook(issuedBook);
  console.log("Количество книг после попытки добавить восстановленную книгу: " + library.books.length);
} else {
  console.log("Книга не найдена для выдачи.");
}

