import { baseApi } from '../../../shared/api/baseApi'
export interface Album { id:number; userId:number; title:string }

export const albumsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query<Album[], number | void>({
      query: (userId) => userId ? `albums?userId=${userId}` : 'albums',
      providesTags: (res) => res ? [
        ...res.map(a => ({ type:'Albums' as const, id:a.id })),
        { type:'Albums' as const, id:'LIST' }
      ] : [{ type:'Albums' as const, id:'LIST' }],
    })
  })
})
export const { useGetAlbumsQuery } = albumsApi
