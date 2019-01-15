



CREATE TABLE `libros` (
  `codigo` int(2) NOT NULL,
  `titulo` varchar(20) NOT NULL,
  `autor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `libros` (`codigo`, `titulo`, `autor`) VALUES
(1, 'Libro 1', 'Autor 1'),
(2, 'Libro 2', 'Autor 3'),
(3, 'Libro 3', 'Autor 2'),
(4, 'Libro 4', 'Autor 3'),
(5, 'Libro 5', 'Autor 2'),
(6, 'Libro 6', 'Autor 2');



CREATE TABLE `prestamos` (
  `cod_socio` int(2) NOT NULL,
  `cod_libro` int(2) NOT NULL,
  `fecha_retirada` date NOT NULL,
  `fecha_devolucion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `prestamos` (`cod_socio`, `cod_libro`, `fecha_retirada`, `fecha_devolucion`) VALUES
(1, 1, '2018-11-04', '2018-11-05'),
(1, 3, '2018-11-19', NULL),
(1, 4, '2018-11-12', '2018-11-21'),
(1, 6, '2018-11-27', NULL),
(2, 3, '2018-11-07', '2018-11-10'),
(2, 5, '2018-11-18', '2018-11-28'),
(3, 1, '2018-11-12', '2018-11-16'),
(3, 4, '2018-11-25', '2018-11-28'),
(4, 4, '2018-11-15', '2018-11-22'),
(5, 3, '2018-11-26', NULL),
(5, 6, '2018-11-29', NULL);


CREATE TABLE `socios` (
  `codigo` int(2) NOT NULL,
  `nombre` varchar(20) CHARACTER SET utf8 NOT NULL,
  `telefono` varchar(9) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `socios` (`codigo`, `nombre`, `telefono`) VALUES
(1, 'Ramón Torres', '111111111'),
(2, 'María López', '222222222'),
(3, 'Paloma Ruiz', '333333333'),
(4, 'Isabel Perea', '444444444'),
(5, 'Luisa Mar', '555555555'),
(6, 'Pedro Macías', '666666666'),
(7, 'Teresa Vílchez', '777777777'),
(8, 'Ricardo Mu', '888888888'),
(9, 'Muriel Mina', '999999999');


ALTER TABLE `libros`
  ADD PRIMARY KEY (`codigo`);

ALTER TABLE `prestamos`
  ADD PRIMARY KEY (`cod_socio`,`cod_libro`,`fecha_retirada`),
  ADD KEY `cod_producto` (`cod_libro`);

ALTER TABLE `socios`
  ADD PRIMARY KEY (`codigo`);
