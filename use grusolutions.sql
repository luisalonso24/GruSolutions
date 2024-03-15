use grusolutions

select * from usuario

/* comando para actualizar campos */
UPDATE usuario
SET apellidoMaterno = "De Jesus"
WHERE idUsuario = 2;


select nombre, correo from usuario;
