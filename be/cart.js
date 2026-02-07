class Cart {
    constructor() {
      this.items = [];
    }
 
    addItem(id, name, price, quantity = 1) {
      const item = this.items.find(i => i.id === id);
      if (item) {
        item.quantity += quantity;
      } else {
        this.items.push({ id, name, price, quantity });
      }
    }

    getTotal() {
      return this.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    }

    clear() {
      this.items = [];
    }
  }
  
  module.exports = Cart;