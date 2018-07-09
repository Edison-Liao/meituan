//视图模型(View Model,又叫做"根实例")
new Vue({
    el: "#app",
    //数据源(Model,数据模型)
    data: {
        goodsInfo: [],
        goodsDetail: {
            "identifier": "",
            "name": "",
            "Country": "",
            "manufDate": "",
            "price": ""
        },
        goodsDetail_state: false
    },
    created() {
        axios.get('/data/goodsinfo.json').then((info) => {
            this.goodsInfo = info.data;
        });
    },
    methods: {
        showDetails(goods) {
            this.goodsDetail = {
                identifier: goods.identifier,
                name: goods.name,
                Country: goods.Country,
                manufDate: goods.manufDate,
                price: goods.price,
            }
            this.goodsDetail_state = true;
        },
        closeDetails() {
            this.goodsDetail_state = false;
        }
    },
    filters: {
        currency(val) {
            if (!val) {
                return val;
            }
            return '￥' + val.toLocaleString();
        },
        toDate(val) {
            if (!val) {
                return val;
            }
            return new Date(val).toLocaleString();
        }
    }
});