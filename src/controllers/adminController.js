const adminController = {
    getAdmins: async (req, res) => {
        try {
            const admins = await Admin.find()
            res.status(200).json(admins)
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    }
}

export default adminController