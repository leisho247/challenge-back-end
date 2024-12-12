import Joi from 'joi'

const adminSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export default adminSchema
// addd more schemas here