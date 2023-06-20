import express from 'express';
import * as middlewares from './middlewares/middlewares';
import productController from './controllers/product.controller';
import ordersControllers from './controllers/orders.controllers';
import loginController from './controllers/login.controllers';

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);
app.post(
  '/products',
  middlewares.validName,
  middlewares.validPrice,
  productController.generateItem,
);

app.get('/orders', ordersControllers.fetchAll);
app.post(
  '/orders',
  middlewares.tokenValid,
  middlewares.userIdValid,
  middlewares.productIdsValid,
  ordersControllers.createTransaction,
);

app.post('/login', middlewares.login, loginController.authenticate);

export default app;
