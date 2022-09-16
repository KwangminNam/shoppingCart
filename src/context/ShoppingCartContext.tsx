import { createContext, ReactNode, useContext, useState } from "react";

type CartItem = {
  id:number
  q:number
}

type ShoppingCartProviderProps ={
  children: ReactNode
}

type ShoppingCartContext = {
  openCart: ()=> void
  closeCart: ()=> void
  getItemQ : (id:number) => number
  increaseQ : (id:number) => void
  decreseQ : (id:number) => void
  removeQ: (id:number) => void
  cartQ: number
  cartItem:CartItem[]

}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart(){
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children} :ShoppingCartProviderProps){

  const [cartItem , setCartItem] = useState<CartItem[]>([]);
  const [isOpen , setIsOpen ] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  
  const cartQ = cartItem.reduce((q,item)=>
    item.q + q,0
  )

  function getItemQ(id:number){  
    return cartItem.find(item=> item.id === id)?.q || 0
  }

  function increaseQ(id:number){
    setCartItem(prev=>{
      if(prev.find(item=> item.id === id) == null){
        return [...prev , {id,q:1}]
      }else{
        return prev.map(item=>{
          if(item.id === id){
            return {...item , q: item.q + 1 };
          }else{
            return item;
          }
        })
      }
    })
  }

  function decreseQ(id:number){
    setCartItem(prev=>{
      if(prev.find(item=> item.id === id)?.q === 1){
        return prev.filter(item=> item.id !== id)
      }else{
        return prev.map(item=>{
          if(item.id === id){
            return {...item , q: item.q - 1 }
          }else{
            return item;
          }
        })
      }
    })
  }

  function removeQ(id:number){
    setCartItem(prev=>{
      return prev.filter(item=> item.id !== id);
    })
  }

  return(
    <ShoppingCartContext.Provider value={{getItemQ,increaseQ,decreseQ,removeQ,cartItem,cartQ,openCart,closeCart}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}