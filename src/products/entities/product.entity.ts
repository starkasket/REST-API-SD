interface updateWithOptions {
    name?: string, 
    description?: string, 
    price?: number,
    stock?: number,
    category?: string
}

export class Product {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public stock: number,
        public category?: string,
        public description?: string) {}

    updateWith({ name, description, price, stock, category }: updateWithOptions) {
        this.name  = name ?? this.name;
        this.description = description ?? this.description
        this.price = price ?? this.price
        this.stock = stock ?? this.stock
        this.category = category ?? this.category 
    }
}
