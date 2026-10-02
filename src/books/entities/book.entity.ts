interface updateWithOptions {
    title?: string,
    author?: string,
    year?: number,
    genre?: string,
    price?: number
}

export class Book {
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public year: number,
        public genre: string,
        public price: number
    ) { }

    updateWith({title, author, year, genre, price }: updateWithOptions) {
        this.title = title ?? this.title;
        this.author = author ?? this.author;
        this.year = year ?? this.year;
        this.genre = genre ?? this.genre;
        this.price = price ?? this.price; 
    }

}
