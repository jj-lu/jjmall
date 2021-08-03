import {ADD_COUNTER,ADD_TO_CART} from "./mutation-type";

export default {
  addCart(context,payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => {
        if (item.iid === payload.iid) return item
      })

      if (oldProduct){
        context.commit(ADD_COUNTER,oldProduct);
        resolve('商品数量加一');
      }else{
        payload.count = 1;
        payload.isCheck = true;
        context.commit(ADD_TO_CART,payload);
        resolve('新增到购物车成功');
      }
    })
  }
}
