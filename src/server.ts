import app from './app';

const PORT = process.env.PORT || 3000;

console.log('🔌 Iniciando servidor...');

app.listen(PORT, () => {
  try {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
  }
});