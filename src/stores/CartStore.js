
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
    this.cart.push({ item, passengerInfo });
  }

  removeItemFromCart(cartItem) {
    console.log(cartItem);
    const index = this.cart.indexOf(cartItem);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  get totalPrice() {
    return this.cart.reduce((total, cartItem) => total + 1200, 0);
  }
}

const cartStore = new CartStore();
export default cartStore;
