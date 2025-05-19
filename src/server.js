import app from './app.js';
import customerRoutes from './routes/CustomerRoutes.js';
import addressRoutes from './routes/AddressRoutes.js';
import { associateModels } from './models/associateModels.js';
import companyRoutes from './routes/CompanyRoutes.js';



const PORT = process.env.PORT;

app.use(`${process.env.API_BASE}/customers`, customerRoutes);
app.use(`${process.env.API_BASE}/addresses`, addressRoutes);
app.use(`${process.env.API_BASE}/companies`, companyRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
