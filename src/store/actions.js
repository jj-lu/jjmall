import {ADD_COUNTER,ADD_TO_CART} from "./mutation-type";

export default {
  addCart(context,payload) {
    let oldProduct = context.state.cartList.find(item => {
      if (item.iid === payload.iid) return item
    })

    if (oldProduct){
      context.commit(ADD_COUNTER,oldProduct);
    }else{
      payload.count = 1;
      payload.isCheck = true;
      context.commit(ADD_TO_CART,payload);
    }
  }
}
