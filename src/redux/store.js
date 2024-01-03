// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './cartReducer'
import cartReducer from './cartReducer'

import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'
// const stripe = require('stripe')('sk_test_51NBWz2BPKBdyI1LpbVahXyiO8NKHZMEhLYas6GH3C4iQehECvMRlCjtNwwljsrOfTE74r2xz3p97FBniDK5OeEjO00SOl9Nk6G');

// import { PersistGate } from 'redux-persist/integration/react'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
