/**
 * Created by zhy on 2018/1/30.
 */
$(function () {
    $.ajax({
        url:'/category/queryTopCategory',
        success:function (data) {
            $('#main .container ul').html(template('cateLeftTem',data));
        }
    });
    $('#main .container ul').on('click','li a',function () {
        getCate(this.getAttribute('index'));
        $(this).parent().addClass('active').siblings().removeClass('active');
    })
    ;(function () {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            indicators: false,
        });
    })();
    function getCate(id) {
        $.ajax({
            url:'/category/querySecondCategory',
            data:'id='+id,
            success:function (backData) {
                $('#main .mui-scroll').html(template('cateRightTem',backData));
            }
        });
    }
    getCate(1);
})
