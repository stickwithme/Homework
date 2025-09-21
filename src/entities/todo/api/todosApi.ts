import { baseApi } from '../../../shared/api/baseApi'
export interface Todo { id:number; userId:number; title:string; completed:boolean }

export const todosApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<Todo[], number | void>({
      query: (userId) => userId ? `todos?userId=${userId}` : 'todos',
      providesTags: (res) => res ? [
        ...res.map(t => ({ type:'Todos' as const, id:t.id })),
        { type:'Todos' as const, id:'LIST' }
      ] : [{ type:'Todos' as const, id:'LIST' }],
    })
  })
})
export const { useGetTodosQuery } = todosApi
