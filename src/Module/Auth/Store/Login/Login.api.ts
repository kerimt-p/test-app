import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { axiosBaseQuery } from '@producter/Core/Client/Toolkit/AxiosBaseQuery';

export const $api = createApi({
	reducerPath: 'loginAPI',
	baseQuery: axiosBaseQuery(),
	endpoints: (builder) => ({
		getAllFeedbacks: builder.query((args) =>({
			url: '/feedback/all',
			params: { first: args?.first }
		}))
	}),
});
