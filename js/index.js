new Vue({
    el: "#app",
    //数据源(Model,数据模型)
    data: {
     sellerInfo:[]
    },
    methods: {
        loadData() {
            //请求数据接口
            axios.get('../data/sellerInfo.json')
                //请求成功之后的操作
                .then((resp) => {
                 this.sellerInfo=resp.data;
                
                })
                //请求失败之后的操作
                .catch((err) => {
                    console.error(err);
                });
        }
    },
    created() {
        this.loadData();
    }

});