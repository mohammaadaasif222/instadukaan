import { makeObservable, observable, action, computed } from "mobx";

class CartStore {
  cart = [];

  constructor() {
    makeObservable(this, {
      cart: observable,
      addItemToCart: action,
      removeItemFromCart: action,
      totalPrice: computed,
    });
  }

  addItemToCart(item, passengerInfo) {
    const uniqueId = new Date().getTime() + Math.floor(Math.random() * 1000);
    const newItem = { id: uniqueId, item, passengerInfo };
    this.cart = [...this.cart, newItem]; 
  }

  removeItemFromCart(id) {
    const newCart = this.cart.filter((item) => item.id !== id);
    this.cart = [...newCart]
  }

  get totalPrice() {
    return this.cart.reduce((total, cartItem) => total + 1200, 0);
  }
}

const cartStore = new CartStore();
export default cartStore;
