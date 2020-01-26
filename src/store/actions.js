export default  {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let oldPrice = context.state.cartList.find(item=>payload.iid ===item.iid)
    if(oldPrice){
      context.commit('addMutations',oldPrice)
      resolve('添加商品+1')
    }else{
      payload.count=1
      context.commit('addToMutations',payload)
      resolve('成功加入商品')
    }
    })
  }
}