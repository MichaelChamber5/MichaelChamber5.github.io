// vite.config.js
export default {
    base: '/',  // Adjust if you're deploying to a subfolder (e.g., /my-project/)
    build: {
      rollupOptions: {
        input: {
          main: './index.html',
          asteroids: './AstroidsWebBuild/asteroids.html',  // Add your other HTML files here
        }
      }
    }
  };
  