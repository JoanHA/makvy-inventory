'use client'
import { useAuth } from '@/app/_context/ContextProvider'
import React, { useEffect } from 'react'

export function rgh({item}:{item:Product}) {
    const {setCartItems,cartItems} = useAuth();
    try {
        const items = [...cartItems];
        console.log(items)
        items.push(item);
        setCartItems(items);
    
      return true
    } catch (error) {
        return false
    }

}

