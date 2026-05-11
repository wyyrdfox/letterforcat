import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
    fs: {
      allow: [
        // Allow serving files from your project root
        'C:\\Users\\Administrator\\Documents\\VSCode\\letterforcat',
        // If needed, allow the specific file
        'C:\\Users\\Administrator\\Documents\\VSCode\\letterforcat\\static\\UGHBMFMF.mp3'
      ]
    }
  }

});
