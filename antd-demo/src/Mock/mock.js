import Mock from 'mockjs';
var Random = Mock.Random;

Mock.mock('http://www.weichuang.com/student',{
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'key|+1': 1,
        'name':'@cname',
        'address':'@province',
        'age':'@integer(18,28)',
        'birthday':'@date'
    }]
});

