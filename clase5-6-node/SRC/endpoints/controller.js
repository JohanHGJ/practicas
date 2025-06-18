const validateString = (int, res) => {
    if (isNaN(int)) {
        res.status(400).json({
            mensaje: 'El ID debe ser un número válido',
            status: 400
        });
        return false; // Detiene la ejecución
    }
    return true; // Continúa la ejecución
};

export default validateString;