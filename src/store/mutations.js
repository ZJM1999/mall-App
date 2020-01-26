export default {
  addMutations(state,payload){
    payload.count+=1
  },
  addToMutations(state,payload){
      payload.isCheck = true
      state.cartList.push(payload)
  }

}