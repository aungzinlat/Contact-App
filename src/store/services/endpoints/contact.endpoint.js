import { ApiService } from "../Api.service";

const contactEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => ({
        method: "GET",
        url: `/contact`,
      }),
    }),
    createContact: builder.mutation({
      query: (formData) => ({
        url: "/contact",
        method: "POST",
        body: formData,
      }),
    }),
    editContact: builder.mutation({
      query: (id, formData) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetContactQuery,
  useCreateContactMutation,
  useEditContactMutation,
} = contactEndpoint;
