import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { axiosBaseQuery } from '@headlessflow/Core/Client/Toolkit/AxiosBaseQuery';


export const $api = createApi({
	reducerPath: 'forgotPasswordAPI',
	baseQuery: axiosBaseQuery(),
	endpoints: (builder) => ({}),
});
