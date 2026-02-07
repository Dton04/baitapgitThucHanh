class OrderManager {
    constructor() {
      this.orders = [];
    }
    
    createOrder(customerName, items) {
      if (!items || items.length === 0) {
        throw new Error("Không thể tạo đơn hàng với giỏ hàng trống");
      }
  
      const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      const newOrder = {
        orderId: `ORD-${Date.now()}`,
        customer: customerName,
        items: [...items],
        totalPrice: total,
        status: 'PAID',
        date: new Date().toLocaleString()
      };
  
      this.orders.push(newOrder);
      return newOrder;
    }
  
    getAllOrders() {
      return this.orders;
    }
  }
  
  module.exports = OrderManager;