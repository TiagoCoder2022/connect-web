import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: 'https://connect-api-trpo.onrender.com/docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'https://connect-api-trpo.onrender.com',

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})