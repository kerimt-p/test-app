import { createSlice } from '@reduxjs/toolkit';

interface IState {}

const initialState: IState = {};

export const $slice = createSlice({
	name: 'login',
	initialState,
	reducers: {},
});

export const $action = $slice.actions;

export const $reducer = $slice.reducer;
