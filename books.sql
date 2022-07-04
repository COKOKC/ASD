/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : books

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2022-06-22 00:06:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET gbk COLLATE gbk_bin NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `status` int(2) DEFAULT '1',
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('10', '1002', '1002', '123', '1002', '1002', '1');
INSERT INTO `admin` VALUES ('2', 'admin', '小红', '123', '1888@qq.com', '18866668888', '2');
INSERT INTO `admin` VALUES ('6', '1000', '丽丽', '123', '123@qq.com', '121', '1');
INSERT INTO `admin` VALUES ('9', '8888', '小绿', '123', '188666@qq.com', '18866668888', '1');
INSERT INTO `admin` VALUES ('7', '1001', '小白', '123', '12', '12', '1');
INSERT INTO `admin` VALUES ('12', 'test1', '123', '123', '123', '123', '1');

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `bid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(205) NOT NULL,
  `card` varchar(205) CHARACTER SET utf8 NOT NULL,
  `autho` varchar(205) DEFAULT NULL,
  `press` varchar(205) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`bid`),
  UNIQUE KEY `ISBN` (`card`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('7', '红楼梦', '1001', '曹植', 'xx出版社', '世界名著');
INSERT INTO `book` VALUES ('6', '三国演义', '1000', '罗贯中', '清华大学出版社', '世界名著');
INSERT INTO `book` VALUES ('8', 'java修炼之道', '6666', '李白', '理工学院出版社', '教育教辅');
INSERT INTO `book` VALUES ('9', '五年高考三年模拟', '1002', '成龙', '成龙出版社', '教育教辅');
INSERT INTO `book` VALUES ('10', '宇宙的起源', '1003', '史蒂芬霍金', '史蒂夫出版社', '科普');
INSERT INTO `book` VALUES ('11', '秘密花园', '1004', '范冰冰', '范冰冰出版社', '小说');
INSERT INTO `book` VALUES ('13', '明朝那些事儿', '1005', '犀利哥', '李白出版社', '历史');

-- ----------------------------
-- Table structure for booktype
-- ----------------------------
DROP TABLE IF EXISTS `booktype`;
CREATE TABLE `booktype` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of booktype
-- ----------------------------
INSERT INTO `booktype` VALUES ('7', '名人传记');
INSERT INTO `booktype` VALUES ('6', '科普');
INSERT INTO `booktype` VALUES ('5', '世界名著');
INSERT INTO `booktype` VALUES ('8', '历史');
INSERT INTO `booktype` VALUES ('9', '教育教辅');
INSERT INTO `booktype` VALUES ('10', '小说');

-- ----------------------------
-- Table structure for history
-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history` (
  `hid` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) DEFAULT NULL,
  `bid` int(11) DEFAULT NULL,
  `card` char(255) DEFAULT NULL,
  `bookname` char(255) DEFAULT NULL,
  `adminname` char(255) DEFAULT NULL,
  `username` char(255) DEFAULT NULL,
  `begintime` char(255) DEFAULT NULL,
  `endtime` char(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`hid`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of history
-- ----------------------------
INSERT INTO `history` VALUES ('12', '9', '6', '1000', '三国演义', '8888', '小绿', '2020-3-30', '2020-5-15', '0');
INSERT INTO `history` VALUES ('11', '9', '7', '1001', '红楼梦', '8888', '小绿', '2020-3-30', '2020-4-30', '1');
INSERT INTO `history` VALUES ('10', '9', '8', '6666', 'java修炼之道', '8888', '小绿', '2020-2-30', '2020-2-30', '0');
INSERT INTO `history` VALUES ('9', '9', '9', '1002', '五年高考三年模拟', '8888', '小绿', '2020-2-30', '2020-2-30', '0');
INSERT INTO `history` VALUES ('8', '9', '7', '1001', '红楼梦', '8888', '小绿', '2020-2-30', '2020-2-30', '0');
INSERT INTO `history` VALUES ('7', '9', '11', '1004', '秘密花园', '8888', '小绿', '2020-2-30', '2020-2-30', '0');
INSERT INTO `history` VALUES ('13', '7', '7', '1001', '红楼梦', '1001', '小白', '2020-3-30', '2020-2-30', '0');
INSERT INTO `history` VALUES ('14', '7', '11', '1004', '秘密花园', '1001', '小白', '2020-3-30', '2020-4-30', '1');
INSERT INTO `history` VALUES ('15', '9', '7', '1001', '红楼梦', '8888', '小绿', '2020-5-15', '2020-6-15', '1');
INSERT INTO `history` VALUES ('16', '9', '7', '1001', '红楼梦', '8888', '小绿', '2020-5-15', '2020-6-15', '1');
INSERT INTO `history` VALUES ('17', '9', '7', '1001', '红楼梦', '8888', '小绿', '2020-5-15', '2020-5-15', '0');
INSERT INTO `history` VALUES ('18', '9', '6', '1000', '三国演义', '8888', '小绿', '2020-5-15', '2020-6-15', '1');
