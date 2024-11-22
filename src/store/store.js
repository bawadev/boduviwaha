// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './rootReducer';

// Persist config for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2, // Merges two levels of state structure
  blacklist: [], // Add reducer names here if you want to blacklist them from persistence
};

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store and include redux-persist middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        serializableCheck: false,
        // Ignore persist actions that involve non-serializable values
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create a persistor instance
const persistor = persistStore(store);

export { store, persistor };
