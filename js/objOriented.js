class Product {
    constructor (id, name, price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity){
        this.product= product;
        this.quantity= quantity;
    }

    getTotalPrice (){
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor(items=[]){
        this.items=items;
    }

    addItem(item){
        if(existantItem = this.items.find(element => element.product.id === item.product.id)){
            existantItem.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
    }
 
    removeItem(item){
        this.items = this.items.filter(element => element.product.id != item.product.id);
    }

    getTotalPrice (){
        return this.items.reduce(
            (total, item) => total + item.getTotalPrice(),
            0,
    )
    }
   
    displayItems (){
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`)
        });
    }
}

// Create some products
const product1 = new product (1, 'Baskets', 100);
const product2 = new product (2, 'Socks', 20);

// Create a shopping cart
const cart = new ShoppingCart();

//create shopping cart items
const item1 = new ShoppingCartItem(product1, 2);
const item2 = new ShoppingCartItem(product2, 3);

// Add items to the cart
cart.addItem(item1);
cart.addItem(item2);

// Display cart items
console.log('Cart itmes: ');
cart.displayItems();

// Remove an item from the cart
cart.removeItem(1); // ID = 1

// Display the cart again after removal
console.log("Cart items after removal:");
cart.displayCartItems();

// Display the total price of the cart
console.log(`Total price of the cart: $${cart.getTotalPrice()}`);