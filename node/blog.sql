/*
Navicat MySQL Data Transfer

Source Server         : laoshan
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-11-24 10:31:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_blogs`
-- ----------------------------
DROP TABLE IF EXISTS `t_blogs`;
CREATE TABLE `t_blogs` (
  `BLOG_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `CATALOG_ID` int(11) DEFAULT NULL COMMENT '所属分类',
  `WRITER` int(11) DEFAULT NULL COMMENT '作者',
  `TITLE` varchar(100) DEFAULT NULL COMMENT '标题',
  `CONTENT` text COMMENT '内容',
  `ADD_TIME` datetime DEFAULT NULL COMMENT '添加时间',
  `CLICK_RATE` int(11) DEFAULT '0' COMMENT '点击率',
  `IS_YOURS` varchar(20) DEFAULT NULL,
  `COMM_RATE` int(11) DEFAULT NULL,
  PRIMARY KEY (`BLOG_ID`),
  KEY `FK_CATALOGS_BLOGS` (`CATALOG_ID`),
  KEY `FK_USERS_BLOGS` (`WRITER`),
  CONSTRAINT `FK_CATALOGS_BLOGS` FOREIGN KEY (`CATALOG_ID`) REFERENCES `t_blog_catalogs` (`CATALOG_ID`) ON DELETE CASCADE,
  CONSTRAINT `FK_USERS_BLOGS` FOREIGN KEY (`WRITER`) REFERENCES `t_users` (`USER_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_blogs
-- ----------------------------
INSERT INTO `t_blogs` VALUES ('5', '2', '1', '雏鸟在窝里瑟瑟发抖，它期盼着春天能带来更多温暖', '蕾拉也是一个挺特别的女孩儿。每次约会她都打扮得漂漂亮亮的出门，脸上画着精致的淡妆，脚上穿着漂亮的凉鞋。如果不是天气热偶尔会把帽子摘下来擦那颗光头上的汗，我几乎都忘了她是一个生命不超过三个月的绝症少女。\r\n再说了，她哪点像绝症少女啊！\r\n一起去看悲情电影，我在旁边都忍不住抽泣了，她还在大嚼着爆米花肆意批评导演拍得太假。\r\n一起去吃大餐的时候，她总是毫无节约意识地点一大桌子的菜，吃得比谁都欢呼雀跃。\r\n一起去游乐园的时候，她本着宁可错杀一千不可放过一个的精神，执拗和每一个好玩的项目合影，就差在柱子上刻下“蕾拉到此一游”。', '2015-01-01 13:57:45', '9', '原创', '2');
INSERT INTO `t_blogs` VALUES ('6', '7', '3', '萤火虫的光芒，也可以照亮夜空', '只是当蕾拉出现在转角楼梯处的时候，我竟然发现自己的身子微微颤抖着，手心里还捏了一把汗。\r\n今天她终于掩住了那标志性的光头，取而代之地是一头金棕色的卷曲长发。她的皮肤在灯光下泛起白瓷般细密紧致的光芒，她的嘴唇像果冻一样水灵灵充满光泽感。她穿着一袭只有在电视里才能看到的白色纱裙，右耳上依然挂着一条羽毛……今天的蕾拉像穿上了水晶鞋的灰姑娘，而我却像傻愣愣的车夫，只等把她送上南瓜车就算。', '2015-01-02 13:59:08', '3', '转帖', '0');
INSERT INTO `t_blogs` VALUES ('9', '6', '2', '四大', '啊身份而非vt', '2014-11-19 12:31:09', '2', '原创', '0');
INSERT INTO `t_blogs` VALUES ('41', '2', '1', '456788', '额外你独守空房你是独立开发能力考试都能\r\n    ', '2015-01-08 07:18:40', '0', '原创', '0');
INSERT INTO `t_blogs` VALUES ('50', '2', '2', 'll', 'll', '2015-01-09 06:00:27', '0', '原创', '0');
INSERT INTO `t_blogs` VALUES ('51', '1', '1', '致老单的前女友', '被project气蒙了 活着不容易', '2019-10-27 10:40:17', '0', null, null);
INSERT INTO `t_blogs` VALUES ('53', '1', '1', '致老单的前男友', '你看当当网的四笔 李国庆和他老婆俞榆', '2019-10-27 10:41:46', '0', null, null);

-- ----------------------------
-- Table structure for `t_blog_catalogs`
-- ----------------------------
DROP TABLE IF EXISTS `t_blog_catalogs`;
CREATE TABLE `t_blog_catalogs` (
  `CATALOG_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(50) DEFAULT NULL COMMENT '分类名称',
  `USER_ID` int(11) DEFAULT NULL,
  `BLOG_COUNT` int(11) DEFAULT '0',
  PRIMARY KEY (`CATALOG_ID`),
  KEY `FK_users_catalogs` (`USER_ID`),
  CONSTRAINT `FK_users_catalogs` FOREIGN KEY (`USER_ID`) REFERENCES `t_users` (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_blog_catalogs
-- ----------------------------
INSERT INTO `t_blog_catalogs` VALUES ('1', '散文', '1', '2');
INSERT INTO `t_blog_catalogs` VALUES ('2', '小说', '2', '11');
INSERT INTO `t_blog_catalogs` VALUES ('3', '诗', '1', '1');
INSERT INTO `t_blog_catalogs` VALUES ('4', '另类', '1', '1');
INSERT INTO `t_blog_catalogs` VALUES ('5', '散文', '3', '1');
INSERT INTO `t_blog_catalogs` VALUES ('6', '诗', '2', '1');
INSERT INTO `t_blog_catalogs` VALUES ('7', '诗', '3', '1');
INSERT INTO `t_blog_catalogs` VALUES ('10', '未分类', '2', '1');
INSERT INTO `t_blog_catalogs` VALUES ('11', '未分类', '3', '1');
INSERT INTO `t_blog_catalogs` VALUES ('12', '其他1234567', '2', '0');
INSERT INTO `t_blog_catalogs` VALUES ('13', '其他2', '2', '0');
INSERT INTO `t_blog_catalogs` VALUES ('14', '其他3', '2', '0');
INSERT INTO `t_blog_catalogs` VALUES ('15', '其他4', '2', '0');
INSERT INTO `t_blog_catalogs` VALUES ('21', '太辛苦了', '2', '0');
INSERT INTO `t_blog_catalogs` VALUES ('22', '老单', '2', '0');

-- ----------------------------
-- Table structure for `t_comments`
-- ----------------------------
DROP TABLE IF EXISTS `t_comments`;
CREATE TABLE `t_comments` (
  `COMMENT_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `COMMENTATOR` int(11) DEFAULT NULL COMMENT '评论人',
  `BLOG_ID` int(11) DEFAULT NULL COMMENT '评论博客',
  `CONTENT` text COMMENT '评论内容',
  `ADD_TIME` datetime DEFAULT NULL COMMENT '评论时间',
  PRIMARY KEY (`COMMENT_ID`),
  KEY `FK_BLOGS_COMMENTS` (`BLOG_ID`),
  KEY `FK_USERS_COMMENTS` (`COMMENTATOR`),
  CONSTRAINT `FK_BLOGS_COMMENTS` FOREIGN KEY (`BLOG_ID`) REFERENCES `t_blogs` (`BLOG_ID`) ON DELETE CASCADE,
  CONSTRAINT `FK_USERS_COMMENTS` FOREIGN KEY (`COMMENTATOR`) REFERENCES `t_users` (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_comments
-- ----------------------------
INSERT INTO `t_comments` VALUES ('7', '1', '5', '撒的发放', '2015-01-07 11:44:26');
INSERT INTO `t_comments` VALUES ('8', '3', '5', 'QQ群', '2015-01-07 11:45:11');
INSERT INTO `t_comments` VALUES ('16', '1', '9', '四大\r\n讨厌', '2015-01-08 00:12:20');
INSERT INTO `t_comments` VALUES ('17', '1', '9', '快点成功吧', '2015-01-07 17:12:39');
INSERT INTO `t_comments` VALUES ('18', '2', '9', 'sfdsfd', '2017-01-17 02:10:24');

-- ----------------------------
-- Table structure for `t_messages`
-- ----------------------------
DROP TABLE IF EXISTS `t_messages`;
CREATE TABLE `t_messages` (
  `MSG_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `REPLY_ID` int(11) DEFAULT NULL COMMENT '回复编号',
  `SENDER` int(11) DEFAULT NULL COMMENT '留言人',
  `RECEIVER` int(11) DEFAULT NULL COMMENT '留言对象',
  `CONTENT` text COMMENT '留言内容',
  `ADD_TIME` datetime DEFAULT NULL COMMENT '留言时间',
  PRIMARY KEY (`MSG_ID`),
  KEY `FK_MESSAGES_REPLY` (`REPLY_ID`),
  KEY `FK_USERS_RECEIVE_MESSAGES` (`RECEIVER`),
  KEY `FK_USERS_SEND_MESSAGES` (`SENDER`),
  CONSTRAINT `FK_MESSAGES_REPLY` FOREIGN KEY (`REPLY_ID`) REFERENCES `t_messages` (`MSG_ID`),
  CONSTRAINT `FK_USERS_RECEIVE_MESSAGES` FOREIGN KEY (`RECEIVER`) REFERENCES `t_users` (`USER_ID`) ON DELETE CASCADE,
  CONSTRAINT `FK_USERS_SEND_MESSAGES` FOREIGN KEY (`SENDER`) REFERENCES `t_users` (`USER_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_messages
-- ----------------------------
INSERT INTO `t_messages` VALUES ('1', null, '1', '2', '卡哇伊思密达', '2015-01-07 22:50:54');
INSERT INTO `t_messages` VALUES ('2', null, '1', '3', '你才卡哇伊思密达', '2014-11-17 12:53:01');
INSERT INTO `t_messages` VALUES ('3', null, '1', '4', '哇呀呀呀', '2015-02-21 10:53:40');
INSERT INTO `t_messages` VALUES ('4', null, '2', '1', '无嘎嘎 诶丫丫', '2014-08-18 22:03:01');
INSERT INTO `t_messages` VALUES ('5', null, '2', '1', '去吧比卡丘', '2015-03-31 22:55:11');
INSERT INTO `t_messages` VALUES ('6', null, '2', '6', '回来吧，小火龙', '2007-01-30 01:01:01');
INSERT INTO `t_messages` VALUES ('7', null, '3', '3', '苹果香蕉大鸭梨', '2015-01-30 09:57:30');
INSERT INTO `t_messages` VALUES ('8', null, '3', '1', '彩电冰箱洗衣机', '2015-01-16 22:58:06');
INSERT INTO `t_messages` VALUES ('9', null, '4', '2', '巴拉拉小魔仙', '2014-12-23 22:59:49');
INSERT INTO `t_messages` VALUES ('10', null, '5', '3', '吃葡萄不吐葡萄皮', '2015-05-27 23:00:39');
INSERT INTO `t_messages` VALUES ('15', null, '2', '5', '111', '2015-01-05 11:21:29');
INSERT INTO `t_messages` VALUES ('16', null, '2', '6', '222', '2014-12-25 11:21:46');
INSERT INTO `t_messages` VALUES ('18', null, '5', '2', '444', '2015-01-22 11:22:26');
INSERT INTO `t_messages` VALUES ('19', null, '2', '1', 'bb 给aa 发了留言啦啦啦啦', '2015-01-08 10:45:37');

-- ----------------------------
-- Table structure for `t_users`
-- ----------------------------
DROP TABLE IF EXISTS `t_users`;
CREATE TABLE `t_users` (
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `ACCOUNT` varchar(50) DEFAULT NULL COMMENT '登录帐号',
  `PASSWORD` varchar(60) DEFAULT NULL COMMENT '登录密码',
  `NAME` varchar(50) DEFAULT NULL COMMENT '姓名',
  `GENDER` varchar(2) NOT NULL COMMENT '性别',
  `BIRTHDAY` varchar(20) DEFAULT NULL COMMENT '生日',
  `PROVINCE` varchar(20) DEFAULT NULL COMMENT '居住地区',
  `CITY` varchar(20) DEFAULT NULL COMMENT '居住城市',
  `SIGNATURE` varchar(200) DEFAULT NULL COMMENT '个性签名',
  `IMG` varchar(100) DEFAULT NULL COMMENT '个人头像',
  `MOOD` varchar(100) DEFAULT NULL COMMENT '我的心情',
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_users
-- ----------------------------
INSERT INTO `t_users` VALUES ('1', 'aa', 'aa', 'aa', '1', '2001-01-01', '江苏', '大兴安岭', '你是我心中优雅的秋风', 'aa.jpg', 'nice');
INSERT INTO `t_users` VALUES ('2', 'bb', 'bb', 'bb', '1', '2000-09-08', '安徽', '伊春', '你是爱，是暖，是希望，你是人间四月天。\r\n', 'bb.jpg', 'aaaa');
INSERT INTO `t_users` VALUES ('3', 'cc', 'cc', 'cc', '2', '2001-12-12', '广州', 'cc', '我和我最后的倔强。', 'cc.jpg', 'bad');
INSERT INTO `t_users` VALUES ('4', 'zz', 'zz', 'zz', '1', '2009-03-03', '北京', 'zz', '晚风吻尽荷花叶，让我醉倒在池边。', 'zz.jpg', 'happy');
INSERT INTO `t_users` VALUES ('5', 'mm', 'mm', 'mm', '2', '2012-03-23', '福建', 'mm', '会不会有一天，时间真的能倒退，退回你的我的回不去的悠悠的岁月。', 'mm.jpg', 'crazy');
INSERT INTO `t_users` VALUES ('6', 'kk', 'kk', 'kk', '1', '2008-08-08', '河南', 'kk', '也许会有一天时间终于有终点，也能一起品尝回忆酿的甜，和你在干一杯。', 'kk.jpg', 'just soso');
INSERT INTO `t_users` VALUES ('7', 'jianshuo', '12345', 'laoshan', '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('10', 'lao@163.com', '12345', 'laoxie', '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('11', 'xiao@163.com', '12345', 'xiaowu', '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('34', 'killer', '12345', null, '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('35', 'lolo', '12345', null, '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('57', 'laoshan@163.com', '12345', 'catlalala', '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('59', 'laoxie@163.com', '12345', 'daglalala', '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('60', 'jiangshuying@163.com', '12345', 'shouyiren', '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('61', 'huge@163.com', '12345', 'malegod', '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('63', 'huojianhua@163.com', '827ccb0eea8a706c4c34a16891f84e7b', 'softman', '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('64', 'laoshan', '12345', null, '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('65', 'laoshan', '12345', null, '', null, null, null, null, null, null);
INSERT INTO `t_users` VALUES ('66', 'laoxie', null, null, '', null, null, null, null, null, null);
