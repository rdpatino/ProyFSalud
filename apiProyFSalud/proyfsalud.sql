-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-03-2020 a las 03:02:54
-- Versión del servidor: 10.3.15-MariaDB
-- Versión de PHP: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyfsalud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `hId` varchar(100) NOT NULL,
  `hDia` varchar(20) NOT NULL,
  `hHora` varchar(20) NOT NULL,
  `hMateria` varchar(100) NOT NULL,
  `hSalon` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`hId`, `hDia`, `hHora`, `hMateria`, `hSalon`) VALUES
('LunesH7-8salon1', 'Lunes', 'H7-8', 'Materia 1', 'salon1'),
('LunesH8-9salon1', 'Lunes', 'H8-9', 'Materia 1', 'salon1'),
('MartesH9-10salon1', 'Martes', 'H9-10', 'Materia 11', 'salon1'),
('ViernesH10-11salon2', 'Viernes', 'H10-11', 'Materia 2', 'salon2'),
('ViernesH11-12salon2', 'Viernes', 'H11-12', 'Materia 2', 'salon2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `matId` int(11) NOT NULL,
  `matNombre` varchar(100) NOT NULL,
  `matDetalles` varchar(500) NOT NULL,
  `matPrograma` varchar(50) NOT NULL,
  `matCupo` int(10) NOT NULL,
  `matSemestre` int(10) NOT NULL,
  `matProfesores` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`matId`, `matNombre`, `matDetalles`, `matPrograma`, `matCupo`, `matSemestre`, `matProfesores`) VALUES
(10, 'Materia 11', 'MartesH2salon2', 'Programa 1', 20, 2, 'Profesor 3'),
(11, 'Materia 8', 'MartesH2salon3', 'Programa 2', 20, 3, 'Profesor 8'),
(12, 'Materia 10', 'MartesH10salon3', 'Programa 2', 20, 3, 'Profesor 8'),
(14, 'Materia 1', 'Ensayo 1', 'Programa 1', 20, 1, 'Profesor 1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `pId` varchar(20) NOT NULL,
  `pNombre` varchar(100) NOT NULL,
  `pDetalles` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`pId`, `pNombre`, `pDetalles`) VALUES
('profe1', 'Profesor 1', 'Medicina'),
('profe2', 'Profesor 2', 'Enfermeria'),
('profe3', 'Profesor 3', 'Fono');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salones`
--

CREATE TABLE `salones` (
  `sId` varchar(100) NOT NULL,
  `sNombre` varchar(100) NOT NULL,
  `sCupo` int(10) NOT NULL,
  `sDetalles` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `salones`
--

INSERT INTO `salones` (`sId`, `sNombre`, `sCupo`, `sDetalles`) VALUES
('salon1', 'Salon 1', 20, 'Tiene: tablero, 25 cupos, 2 ventanas, tv'),
('salon2', 'Salon 2', 25, 'Tiene: tablero, 30 cupos, 1 ventanas');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`hId`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`matId`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`pId`);

--
-- Indices de la tabla `salones`
--
ALTER TABLE `salones`
  ADD PRIMARY KEY (`sId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `matId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
