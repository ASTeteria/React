import Joi from 'joi';

export const postValidation = Joi.object({
    title: Joi.string().required().min(3).max(20).messages({
        'string.min': `Title should have a minimum length of 3`,
        'string.max': `Title should have a maximum length of 20`,
        'any.required': `Title is a required`
    }),
    body: Joi.string().required().min(5).max(217).messages({

        'string.min': `Body should have a minimum length of 5`,
        'string.max': `Body should have a maximum length of 217`,
        'any.required': `Body is a required field`
    }),
});
