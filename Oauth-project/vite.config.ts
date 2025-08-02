import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias MUI styled-engine to styled-engine-sc (styled-components)
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
});