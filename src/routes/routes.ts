import { Router } from 'express';
import { verifyToken } from '../middlewares/auth';
import { loginController } from '../controllers/authController';
import { generateAzureController } from '../controllers/controllers';

const router = Router();

router.post('/login', loginController);

// Express 5.x: usa /blob/* y pasa el path manualmente al controlador
router.get('/blob/*', verifyToken, (req, res) => {
  const blobPath = req.params[0];
  if (!blobPath) {
    res.status(400).json({ message: 'Falta el nombre del archivo' });
    return;
  }
  req.params.blobPath = blobPath;
  generateAzureController(req, res); // <-- sin return
});


export default router;