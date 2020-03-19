

// 构建工具grunt

// 	Grunt 依赖 Node.js 所以在安装之前确保你安装了 Node.js。然后开始安装 Grunt。
// 	安装\grunt-cli	[npm install -g grunt-cli;]
// 	在本地建立grunt文件夹
// 	进到文件夹下	[npm init]初始化
// 	写入一个name(不要写grunt)[test],生成配置文件package.json
// 	建立Gruntfile.js文件,在里面配置任务,

module.exports = function(grunt){
//初始化数据。初始化一个test
	grunt.initConfig({
		test:{
			name:'aaa'
		}
	});

	grunt.config.get('text.name');//取到该值
	console.log(grunt.config.get('text.name'));



//运行,[grunt 任务名字]
	grunt.registerTask('task1  ',function(){//注册任务
		console.log("test");
//还可以传参[grunt task1:Zhengruyu]
	grunt.registerTask('task2  ',function(name){//注册任务
		console.log(name);
//定义任务执行其他的任务	[grunt default] [grunt]/默认走default
	grunt.registerTask('default',['task1','task2'])


//警告,在命令提示符中敲参数grunt task1:q
	grunt.registerTask('task1',function(name){
		if (name.length<2) {
			grunt.warn('参数太短');警告，不会再往下执行,再敲--force执行
			grunt.fatal('参数太短');错误，不会往下执行

		}
		console.log('ddd');

	})
//[--force](警告可以)强制向下执行

//先去grunt.initConfig里面有没有与test同名的属性，里面有name属性则输出name的值。多个属性输出多个。执行多次
	grunt.registerMultiTask('test',function(){
		console.log(this.target +"___"+this.data);target是属性值，data是属性值
	})

//创建文件夹/删除文件夹
	grunt.registerTask('creat',function(){
		grunt.file.mkdir(‘dist/js’);
		grunt.file.delete(‘dist’);
	})


//读写数据
	grunt.registerTask('readJSON',function(){
		var name = grunt.file.readJSON(‘package.json’).name;//返回对象,可以直接.属性返回值
		grunt.file.write(‘dist.txt’,content);

	})



// 插件

// 下载插件，加载到依赖中
// 	npm install grunt-contrib-cssmin --save-dev

// 复制
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.initConfig({
		copy:{//名字与插件名相同
			html:{//随便命名
				src:'index.html' //原文件
				dest:'dest/'//复制到文件
			}
		}
	});
// 命令行
// grunt copy

// 实时浏览,连接服务器
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.initConfig({
	connect:{//名字与插件名相同
		server1:{
			options:{
				port:8080,端口号
				base:'dest'文件
				livereload:true//实时刷新
			}
		}
	}
});
// 命令行
// grunt connect



//,监视文件变化
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.initConfig({
	watch:{//名字与插件名相同
		html:{//随便命名
			files:['index.html'],监视的文件
			task:['copy']有改动就执行的任务
			options:{
				livereload:true//实时刷新
			}
		css:{

		}

		}
	}
});
// 命令行
// grunt watch



// 压缩css
grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.initConfig({
		cssmin:{
			css:{
				src:'dext/style.css';
				dest:'dext/style.min.css';
			}

	}
	});
// 命令行
// grunt cssmin


// 压缩js
grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		uglify:{
			js:{
				src:'dext/style.js';
				dest:'dext/style.min.js';
			}

	}
	});

// sass
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.initConfig({
		sass:{//名字与插件名相同
			css:{//随便命名
				src:'src/sass/text.scss'
				dest:'src/css/text.css'
				files:[{//多个文件
					expend:true,
					cwd:'src/css',
					src:['*.scss'],
					dest:'src/css/',
					ext:'.css'
				}]
			}
		}
	});
// 命令行
// grunt sass



// 组合

grunt.registerTask('default',['watch','connect'])


}




}



















