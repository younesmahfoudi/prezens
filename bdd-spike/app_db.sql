-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : db:3306
-- Généré le : ven. 08 avr. 2022 à 21:15
-- Version du serveur : 8.0.21
-- Version de PHP : 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `app_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `ADMIN`
--

CREATE TABLE `ADMIN` (
  `uid` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `CLASS`
--

CREATE TABLE `CLASS` (
  `uid` varchar(255) NOT NULL,
  `promotion` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `LESSON`
--

CREATE TABLE `LESSON` (
  `uid` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `start_at` date NOT NULL,
  `end_at` date NOT NULL,
  `class_uid` varchar(255) NOT NULL,
  `professor_uid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `LESSON_REGISTER`
--

CREATE TABLE `LESSON_REGISTER` (
  `lesson_uid` varchar(255) NOT NULL,
  `student_uid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `PROFESSOR`
--

CREATE TABLE `PROFESSOR` (
  `uid` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `STUDENT`
--

CREATE TABLE `STUDENT` (
  `uid` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `class_uid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ADMIN`
--
ALTER TABLE `ADMIN`
  ADD PRIMARY KEY (`uid`);

--
-- Index pour la table `CLASS`
--
ALTER TABLE `CLASS`
  ADD PRIMARY KEY (`uid`);

--
-- Index pour la table `LESSON`
--
ALTER TABLE `LESSON`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `class_uid` (`class_uid`),
  ADD KEY `professor_uid` (`professor_uid`);

--
-- Index pour la table `LESSON_REGISTER`
--
ALTER TABLE `LESSON_REGISTER`
  ADD KEY `lesson_uid` (`lesson_uid`),
  ADD KEY `student_uid` (`student_uid`);

--
-- Index pour la table `PROFESSOR`
--
ALTER TABLE `PROFESSOR`
  ADD PRIMARY KEY (`uid`);

--
-- Index pour la table `STUDENT`
--
ALTER TABLE `STUDENT`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `class_uid` (`class_uid`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `LESSON`
--
ALTER TABLE `LESSON`
  ADD CONSTRAINT `LESSON_ibfk_1` FOREIGN KEY (`class_uid`) REFERENCES `CLASS` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `LESSON_ibfk_2` FOREIGN KEY (`professor_uid`) REFERENCES `PROFESSOR` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `LESSON_REGISTER`
--
ALTER TABLE `LESSON_REGISTER`
  ADD CONSTRAINT `LESSON_REGISTER_ibfk_1` FOREIGN KEY (`lesson_uid`) REFERENCES `LESSON` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `LESSON_REGISTER_ibfk_2` FOREIGN KEY (`student_uid`) REFERENCES `STUDENT` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `STUDENT`
--
ALTER TABLE `STUDENT`
  ADD CONSTRAINT `STUDENT_ibfk_1` FOREIGN KEY (`class_uid`) REFERENCES `CLASS` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
