// store.js
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

// store.js (devamı)
export const login = (user) => ({
    type: 'login',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'logout',
  });
  
  // Reducer kısmını değiştirelim
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'login':
        return { ...state, user: action.payload };
      case 'logout':
        return { ...state, user: null };
      default:
        return state;
    }
  };
  

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
