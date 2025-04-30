import app from './app.js';

import routerCustomer from './routes/CustomerRoutes.js';
import { associateModels } from './models/associateModels.js';

const PORT = process.env.PORT;

app.use('/qr_connect', routerCustomer);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
