

CREATE TABLE `habitaciones` (
  `codigo` int(2) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `planta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `habitaciones` (`codigo`, `nombre`, `planta`) VALUES
(1, 'Habitación 1', 'Planta 1'),
(2, 'Habitación 2', 'Planta 3'),
(3, 'Habitación 3', 'Planta 2'),
(4, 'Habitación 4', 'Planta 3'),
(5, 'Habitación 5', 'Planta 2'),
(6, 'Habitación 6', 'Planta 2');



CREATE TABLE `ingresos` (
  `cod_paciente` int(2) NOT NULL,
  `cod_habitacion` int(2) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `fecha_salida` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `ingresos` (`cod_paciente`, `cod_habitacion`, `fecha_ingreso`, `fecha_salida`) VALUES
(1, 1, '2018-11-04', '2018-11-05'),
(1, 3, '2018-11-19', NULL),
(1, 4, '2018-11-12', '2018-11-21'),
(1, 6, '2018-11-27', NULL),
(2, 3, '2018-11-07', '2018-11-10'),
(2, 5, '2018-11-18', '2018-11-28'),
(3, 1, '2018-11-12', NULL),
(3, 4, '2018-11-25', '2018-11-28'),
(4, 4, '2018-11-15', '2018-11-22'),
(5, 3, '2018-11-26', NULL),
(5, 6, '2018-11-29', NULL);



CREATE TABLE `pacientes` (
  `codigo` int(2) NOT NULL,
  `nombre` varchar(20) CHARACTER SET utf8 NOT NULL,
  `telefono` varchar(9) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `pacientes` (`codigo`, `nombre`, `telefono`) VALUES
(1, 'Ramón Torres', '111111111'),
(2, 'María López', '222222222'),
(3, 'Paloma Ruiz', '333333333'),
(4, 'Isabel Perea', '444444444'),
(5, 'Luisa Mar', '555555555'),
(6, 'Pedro Macías', '666666666'),
(7, 'Teresa Vílchez', '777777777'),
(8, 'Ricardo Mu', '888888888'),
(9, 'Muriel Mina', '999999999');


ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`codigo`);

ALTER TABLE `ingresos`
  ADD PRIMARY KEY (`cod_paciente`,`cod_habitacion`,`fecha_ingreso`),
  ADD KEY `cod_producto` (`cod_habitacion`);

ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`codigo`);
COMMIT;
