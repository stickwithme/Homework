Fix: "Duplicate middleware references" in Redux store

Why it happens:
- All your endpoints (`postsApi`, `commentsApi`, `albumsApi`, `todosApi`) are created via `baseApi.injectEndpoints(...)`.
- They **share the same RTK Query slice** and **the same middleware**.
- Adding `postsApi.middleware`, `commentsApi.middleware`, ... duplicates the same middleware references.

Solution:
- Register **only the baseApi** in reducer and middleware.

Apply:
1) Replace `src/app/providers/store/store.ts` with the one in this archive.
2) Restart dev server.
