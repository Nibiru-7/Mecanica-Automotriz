# Mecanica-Automotriz

Proyecto backend para gestión de servicios de mecánica automotriz, desarrollado con Node.js, TypeScript y Docker.

---

## 🚀 Tecnologías utilizadas

- Node.js
- TypeScript
- Docker
- Nginx (reverse proxy)
- MySQL

---

## 📦 Instalación y despliegue local

1. **Clona el repositorio**
   ```sh
   git clone https://github.com/Nibiru-7/Mecanica-Automotriz.git
   cd Mecanica-Automotriz
   ```

2. **Configura las variables de entorno**
   - Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
     ```
     DB_HOST=151.106.110.1
     DB_USER=u777467137_deviozapp
     DB_PASSWORD=Deviozapp10+
     DB_DATABASE=u777467137_deviozapp
     DB_PORT=3306

     JWT_SECRET=secreto
     JWT_EXPIRES_IN=1h

     PORT=3000

     AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=dev1adls1data1proy1prod;AccountKey=...;EndpointSuffix=core.windows.net
     ```

3. **Construye la imagen Docker**
   ```sh
   docker build -t mecanica-api .
   ```

4. **Ejecuta el contenedor**
   ```sh
   docker run --env-file .env -p 3000:3000 mecanica-api
   ```

---

## 🌐 Configuración de Nginx como reverse proxy

1. **Instala Nginx en tu VPS**
   ```sh
   sudo apt update
   sudo apt install nginx
   ```

2. **Agrega la configuración en `/etc/nginx/sites-available/mecanica`**
   ```nginx
   server {
       listen 80;
       server_name TU_DOMINIO_O_IP;

       location / {
           proxy_pass http://localhost:3000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

3. **Habilita la configuración**
   ```sh
   sudo ln -s /etc/nginx/sites-available/mecanica /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

---

## 📝 Comentarios sobre el desarrollo

- El proyecto se dockerizó para facilitar el despliegue en cualquier entorno.
- Se utilizó Nginx como reverse proxy para mejorar la seguridad y el rendimiento.
- Las variables sensibles se gestionan mediante archivos `.env` (no se suben al repositorio).
- Se recomienda usar HTTPS en producción (puedes agregar Let's Encrypt).

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

## ✉️ Contacto

Para dudas o soporte, contacta a [Nibiru-7](https://github.com/Nibiru-7).
