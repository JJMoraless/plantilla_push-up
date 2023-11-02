import { validationResult } from "express-validator";

export const fieldsHandler = (...fieldsShema) => {
  return (req, res, next) => {
    const fieldsRequest = Object.keys(req.body);

    const invalidFields = fieldsRequest.filter((field) => {
      return !fieldsShema.includes(field);
    });

    if (invalidFields.length > 0) {
      return res.status(400).json({
        ok: false,
        error: `campos no son permitidos: ${invalidFields.join(", ")}`,
      });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    
    next();
  };
};
