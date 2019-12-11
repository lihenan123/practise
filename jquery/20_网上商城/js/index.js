// 文档就绪函数
$(function(){
    $('#jnBrandTab li').on('click',function(){
        $(this).addClass('chos').siblings().removeClass('chos');
        // 获取一屏宽度
        var width = $('#jnBrandList li').outerWidth(true)*4;
        // 获取当前点击按钮的索引
        var index = $(this).index();
        $('#jnBrandList').animate({
            left:-index*width
        },1000);
    })
})