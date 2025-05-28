import Wallet from "../../models/WalletModel.js";

const UpdateBalanceService = async (customerId, amount, transaction) => {
    try {
       
        const wallet = await Wallet.findOne({
            where: { id_customer: customerId },
            transaction
        });

        if (!wallet) {
            throw new Error("Carteira não encontrada para o organizador.");
        }

      
        const newBalance = Number(wallet.balance) + Number(amount);

     
        await wallet.update({ balance: newBalance }, { transaction });

        return {
            message: "Saldo do organizador atualizado com sucesso!",
            wallet: {
                id_customer: wallet.id_customer,
                balance: newBalance
            }
        };
    } catch (error) {
        throw new Error(`Erro ao atualizar saldo: ${error.message}`);
    }
};

export default UpdateBalanceService;