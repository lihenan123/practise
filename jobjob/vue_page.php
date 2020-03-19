<!DOCTYPE html>
<html lang="en">
<head>
        <!-- 基础信息和房源点评start -->
        <div class="otherInfo" id="other-info">
            <div class="otherNav">
                <span id="baseNav" class="baseNav" :class="{currentBorder: currentIndex == 0}" @click="switchTab(0)">房源信息</span>
                <span id="commentNav" class="commentNav" :class="{currentBorder: currentIndex == 1}" @click="switchTab(1)">房源点评</span>
                <span id="mapNav" class="mapNav" :class="{currentBorder: currentIndex == 2}" @click="switchTab(2)">百度地图</span>
            </div>
            <div class="otherContent">
                <!-- 基础信息start -->
                <div id="baseInfo" class="baseInfo" v-show="currentIndex == 0">
                    <p><?php echo $allInfo[0]->description ?></p>
                    <img class="baseInfoPicLeft" src="img/baseInfoPicLeft.png" alt="">
                    <img class="baseInfoPicRight" src="img/baseInfoPicRight.png" alt="">
                </div>
                <!-- 基础信息end -->
                <!-- 房源点评start -->
                <div id="commentInfo" class="commentInfo" v-show="currentIndex == 1">
                    <ul>
                        <li class="commentInfoList" v-for="comment in commentList">
                            <div class="commentUser">
                                <a href="">
                                    <img :src="comment.portrait" alt="">
                                </a>
                                <span v-text="comment.username"></span>
                            </div>
                            <figure>
                                <p v-text="comment.content"></p>
                                <div class="imgGather">
                                    <img :src="commentImg.img_thumb_src" alt="" v-for="commentImg in comment.comment_imgs">
                                    <span class="imgGatherTime" v-text="comment.comm_time"></span>
                                </div>
                            </figure>
                        </li>
                    </ul>
                    <pagination :page-size="pageSize" :total="total" v-on:paginate="loadData"></pagination>
                </div>
              


    </div>
    <!-- 房源详情右侧展示end -->
</div>
<?php include "postMessage.php" ?>
</div>

<?php include "footer.php" ?>
<script src="js/jquery-1.12.4.js"></script>
<script src="js/jquery.dialog7-1.0.js"></script>
<script src="js/datetime.js"></script>
<script src="http://api.map.baidu.com/api?key=&v=1.1&services=true"></script>
<script src="js/vue.min.js "></script>
<script src="js/axios.min.js"></script>
<script>
    $(".reserveBtn").on("click", function () {
        window.location = "<?php echo site_url();?>/welcome/submitorder";
    });

    //<pagination :page-size="pageSize" :total="total"></pagination>


    Vue.component('pagination',{
        template: '<ul class="pagination">\
                    <li class="paginate-button" :class="{active: currPage == page}" v-for="page in pageNo" @click="paginate(page)">{{page}}</li>\
                   </ul>',
        props: ['pageSize', 'total'],
        data: function () {
          return {
              currPage: 1//返回当前页
          };
        },
        computed: {
            pageNo: function () {
                return Math.ceil(this.total / this.pageSize);
            }
        },
        methods: {
            paginate: function (page) {
                if(this.currPage == page) return;
                this.currPage = page
                this.$emit('paginate', page);
            }
        }
    });



    new Vue({
        el: '#other-info',
        data: {
            commentList: [],
            currentIndex: 0,
            pageSize: 3,
            total: 0
        },
        methods: {
            switchTab: function (index) {
                this.currentIndex = index;
                if(index == 1){
                    this.loadData(1);
                }
            },
            loadData: function (page) {
                var _this = this;
                axios.get('house/get_comments/'+<?php echo $this->uri->segment(3);?>, {
                    params: {
                        page: page,
                        pageSize: _this.pageSize
                    }
                }).then(function (res) {
                    var result = res.data;
                    _this.total = result.total;
                    _this.commentList = result.data;
                });
            }
        }
    });
</script>
</body>
</html>