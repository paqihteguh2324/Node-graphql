const EmployeeModels = require('./model/employee.js')

module.exports = {
    Query: {
        getAllEmployee: async () => await EmployeeModels.find({})
    },

    Mutation: {
        createEmployee: async (_, args) => {
            try {
                const employee = new EmployeeModels(args);
                await employee.save();
                console.log(`Employee berhasil dibuat: ${employee}`);
                return employee;
            } catch (error) {
                console.error(`Error saat membuat employee: ${error.message}`);
                throw new Error('Gagal membuat employee');
            }
        },
        
        updateEmployee: async (_, args) => {
            try {
                const updatedEmployee = await EmployeeModels.findByIdAndUpdate(args._id, args, { new: true });
        
                if (updatedEmployee) {
                    console.log(`Employee dengan ID ${args._id} berhasil diperbarui`);
                    return updatedEmployee;
                } else {
                    console.log(`Employee dengan ID ${args._id} tidak ditemukan`);
                    throw new Error('Employee tidak ditemukan');
                }
            } catch (error) {
                console.error(`Error saat memperbarui employee dengan ID ${args._id}: ${error.message}`);
                throw new Error('Gagal memperbarui employee');
            }
        },
        
        deleteEmployee: async (_, args) => {
            try {
                const deletedEmployee = await EmployeeModels.findByIdAndDelete(args._id);
                
                if (deletedEmployee) {
                    console.log(`Employee dengan ID ${args._id} berhasil dihapus`);
                    return true;
                } else {
                    console.log(`Employee dengan ID ${args._id} tidak ditemukan`);
                    return false;
                }
            } catch (error) {
                console.error(`Error menghapus employee dengan ID ${args._id}: ${error.message}`);
                return false;
            }
        }
        
        
    }
}