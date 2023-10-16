import { observable, action, makeObservable } from 'mobx';
import { configure } from "mobx"

configure({ useProxies: "never" })

class CartStore {
  cartItems = [];
  passengerInfo = {};

  constructor() {
    makeObservable(this, {
      cartItems: observable,
      passengerInfo: observable,
      addToCart: action,
      updatePassengerInfo: action,
    });
  }

  addToCart(product) {
    this.cartItems.push(product);
  }

  updatePassengerInfo(info) {
    this.passengerInfo = info;
  }
}

const cartStore = new CartStore();
console.log(cartStore)
export default cartStore;
