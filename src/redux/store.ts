import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import adminAuth from './ReduxFunction';
import baseApi from './api/baseApi';
import stripeApi from './api/stripeApi';
import paymentIdreducer from '@/redux/allSlice/paymentSlice'




// Persist configuration for `formData`
const persistConfig = {
  key: 'root',
  storage,
};


const persistedReducer = persistReducer(persistConfig, adminAuth);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    payId:paymentIdreducer,
    // Add API reducers
    [baseApi.reducerPath]: baseApi.reducer,
    [stripeApi.reducerPath]: stripeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['Auth.somePathWithNonSerializableValues'],
      },
    })
    .concat(baseApi.middleware, stripeApi.middleware), // Concatenate all middleware
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
