import { createSlice, configureStore } from '@reduxjs/toolkit';
import react from '@vitejs/plugin-react';
react({
	babel: {
		plugins: [['@babel/plugin-proposal-decorators', {
			legacy: true
		}], ['@babel/plugin-proposal-class-properties', {
			loose: true
		}], '@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-regenerator', ['@babel/plugin-transform-runtime', {
			helpers: false,
			regenerator: true
		}]],
		presets: ["@babel/preset-flow", 'module:metro-react-native-babel-preset']
	}
});
const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0
	},
	reducers: {
		incremented: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decremented: state => {
			state.value -= 1;
		}
	}
});
export const {
	incremented,
	decremented
} = counterSlice.actions;
const store = configureStore({
	reducer: counterSlice.reducer
}); // Can still subscribe to the store

store.subscribe(() => console.log(store.getState())); // Still pass action objects to `dispatch`, but they're created for us

store.dispatch(incremented()); // {value: 1}

store.dispatch(incremented()); // {value: 2}

store.dispatch(decremented()); // {value: 1}