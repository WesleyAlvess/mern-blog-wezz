import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({
            success: false,
            statusCode: 401,
            message: 'Token não fornecido'
        });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded; // Adiciona o usuário decodificado ao objeto de requisição para uso posterior
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            statusCode: 401,
            message: 'Token inválido'
        });
    }
};
