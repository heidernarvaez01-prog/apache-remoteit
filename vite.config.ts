import { defineConfig } from 'vite'
import { resolve } from 'path'

// Sitio estático multi-página: plantilla Montek adaptada a los servicios de
// Apache Soporte TI. El root del proyecto Vite es HTML/, cada página real es
// un entry point independiente para que Vite resuelva sus assets y genere un
// build por página.
export default defineConfig({
  root: 'HTML',
  // mpa: sin fallback de SPA a index.html — rutas inexistentes deben dar 404 real.
  appType: 'mpa',
  // Vite solo rastrea <link>, <img> y <script type="module"> — los <script src>
  // clásicos (jQuery, GSAP y el resto de assets/js/*.js) y sendemail.php nunca
  // se copiaban a dist/ en el build de producción aunque funcionaran en `dev`.
  // publicDir los copia tal cual, preservando la ruta relativa que referencia el HTML.
  publicDir: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'HTML/index.html'),
        servicios: resolve(__dirname, 'HTML/work.html'),
        planes: resolve(__dirname, 'HTML/planes.html'),
        about: resolve(__dirname, 'HTML/about.html'),
        contact: resolve(__dirname, 'HTML/contact.html'),
        blogCiberseguridad: resolve(__dirname, 'HTML/blog-ciberseguridad.html'),
        servicioSoporte: resolve(__dirname, 'HTML/servicio-soporte-operacion-ti.html'),
        servicioSeguridad: resolve(__dirname, 'HTML/servicio-seguridad-redes.html'),
        servicioOptimizacion: resolve(__dirname, 'HTML/servicio-optimizacion-automatizacion.html'),
        servicioConsultoria: resolve(__dirname, 'HTML/servicio-consultoria-cumplimiento.html'),
        servicioMedida: resolve(__dirname, 'HTML/servicio-soluciones-medida.html'),
      },
    },
  },
})
