import app from './app.js';

import customerRoutes from './routes/CustomerRoutes.js';
import addressRoutes from './routes/AddressRoutes.js';
import { associateModels } from './models/associateModels.js';

const PORT = process.env.PORT;

app.use('/qr_connect', customerRoutes);
app.use('/qr_connect', addressRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
