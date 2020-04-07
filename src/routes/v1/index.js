const userRoutes = require('./UserRoutes');
const productRoutes = require('./ProductRoutes');

module.exports = app => {
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/products', productRoutes);
};
