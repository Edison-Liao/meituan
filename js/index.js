new Vue({
    el: "#app",
    //数据源(Model,数据模型)
    data: {
        sellerInfo: [],
        //商家信息
        businessInfo: {
            "image": "",
            "name": "",
            "star": 0,
            "pickup": false,
            "salesCount": 0,
            "timeUsed": 0,
            "distance": 0,
            "startFee": 0,
            "transportFee": 0,
            "giveMeMoney": 0,
            "activities": ""
        },
        show: true
    },
    methods: {
        loadData() {
            //请求数据接口
            axios.get('../data/sellerInfo.json')
                //请求成功之后的操作
                .then((resp) => {
                    this.sellerInfo = resp.data;

                })
                //请求失败之后的操作
                .catch((err) => {
                    console.error(err);
                });
        },
        addBusiness() {
            this.show = !this.show;
            const businessInfo = document.querySelector('.businessInfo')
            if (businessInfo.classList.contains('show')) {
                businessInfo.classList.remove('show');
            } else {
                businessInfo.classList.add('show');
            }
        },
        confirmAddBusiness() {
            this.sellerInfo.push(this.businessInfo);
            this.businessInfo = {
                "image": "",
                "name": "",
                "star": '',
                "pickup": "",
                "salesCount": "",
                "timeUsed": "",
                "distance": "",
                "startFee": "",
                "transportFee": "",
                "giveMeMoney": "",
                "activities": ""
            }
            this.show = !this.show;
            const businessInfo = document.querySelector('.businessInfo')
            if (businessInfo.classList.contains('show')) {
                businessInfo.classList.remove('show');
            } else {
                businessInfo.classList.add('show');
            }
        }
    },
    created() {
        this.loadData();
    }

});