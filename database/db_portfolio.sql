-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 06, 2019 at 05:28 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_folio`
--

CREATE TABLE `tbl_folio` (
  `ID` int(11) NOT NULL,
  `ProjID` int(11) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `DispImg` varchar(100) NOT NULL,
  `OtherImg` varchar(100) NOT NULL,
  `Desc1` text NOT NULL,
  `Desc2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_folio`
--

INSERT INTO `tbl_folio` (`ID`, `ProjID`, `Title`, `DispImg`, `OtherImg`, `Desc1`, `Desc2`) VALUES
(1, 1, 'WaveChaser.ph', 'images/p-img/Wave-Display.jpg', 'images/p-img/Wave-suppImage2.jpg', 'This challenge is to design and analyze a travel browsing and booking experience. Week one will focus on the website and week two will go mobile.\r\nAs travelling experiences are not always fun and zest, my main goal as the UX/UI Designer is to create and design a travel website for users, specifically for foreigners and nomads, who are often overwhelmed with not having an idea where to start. Although travelling is fun, researching an unfamiliar place can be tedious. That said, WAVECHASER.PH is a homage to my birth-country, Philippines. As someone who loves travelling, I do share most of the pain points of the sample user persona, including the anxiety that most travellers feel when researching an unfamiliar country.\r\nTaking inspirations from Narcity and Kayak, WAVECHASER.PH offers an all-in-one place where travellers can research the beaches, waterfalls, and hidden gems in the Philippines. If when the travellers liked or pinned one of the desired destinations, the website will then offer a chance for them to build a travel planner where they can curate all of their dream destinations. Flight booking and tips on where to book for best and cheap accommodations are also made available.', 'WAVECHASER.PH’s services include:\r\n1. Information about Philippines’ beaches, waterfalls, and hidden gems\r\n2. Tips on the best and cheap flights and accommodations\r\n3. Easy to build Travel Planner and Pinlist\r\n4. Available to read blogs about Philippines\r\n5. Ability to add fellow travellers'),
(2, 2, 'ThermoSecure by HouseCom', 'images/p-img/Thermo-Display.png', 'images/p-img/Thermo-suppImg2.jpg', 'The basis of this assignment is to create an interactive application using 3D, video, and still images. My team and I designed and developed an engaging experience for the end user with which they can interact in a one-page mobile-first web application.\r\n', 'As the Graphic Designer of the team, I was responsible for designing the user experience and interface of the app where users can modify the thermostat, whether they are at home or away. To formalize our brand, we needed a logo. Some of the keywords we thought of are safe, secure, temperature, comfort, and home. After brainstorming, we came up with this logo.Our idea was to incorporate a house, lock, and sun all in one logo. These elements captured everything that the ThermoSecure by HomeCom system has to offer; those being security, temperature control, weather and air monitoring, all for your home.\r\nFinally, I designed a corresponding sell-sheet to entice the public with this new product.\r\n'),
(3, 3, 'Cricket 101: Infographic', '/images/p-img/Cabiling_Syrrel_Infographic.jpg', 'images/p-img/Infographic.png', 'Our class was tasked to research and design an infographic that would explain the basics of Cricket (the sport). As someone who had no idea how to play Cricket at all, I turn to research. My main goal is to simplify the information I found and relay that to viewers. This is my version to Cricket 101. The design approach I did is to make it appealing as possible so that it would not bore someone who is looking at it and to avoid information overload.', ''),
(4, 4, 'BioTecture Organ Awareness', '/images/p-img/Bio-Display.jpg', '/images/p-img/Bio-suppImg2.jpg', 'For this project, my team and I were tasked to bring an awareness to this new organ transplant process and spread the ‘word’ on what it is, who can benefit from it and why this process is so unique and why it should become a part of mainstream medicine. As the UX and UI designer of the team, I designed the interface for BioTecture\'s official website as well as the accompanying campaign graphics and the illustrations. The design is mainly inspired by the organ decellularization and recellularization  process - which takes the scaffold aspect as part of the site\'s illustrations.', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `ID` int(11) NOT NULL,
  `ProjName` varchar(100) NOT NULL,
  `DispImg` varchar(100) NOT NULL,
  `Text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`ID`, `ProjName`, `DispImg`, `Text`) VALUES
(1, 'WaveChaser.ph', 'images/p-img/Wave-Display.jpg', 'A UI design for a travel and booking app'),
(2, 'ThermoSecure by HouseCom', 'images/p-img/Thermo-Display.png', 'A UX and UI design for a thermostat device'),
(3, 'Cricket 101: Infographic', 'images/p-img/Cabiling_Syrrel_Infographic.jpg', 'An Infographic to explain the basics of the sport Cricket'),
(4, 'BioTecture Organ Awareness', '/images/p-img/Bio-Display.jpg', 'A UI and graphic design for an organ awareness website');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_folio`
--
ALTER TABLE `tbl_folio`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_folio`
--
ALTER TABLE `tbl_folio`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
