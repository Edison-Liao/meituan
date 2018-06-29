new Vue({
    el: "#app",
    //数据源(Model,数据模型)
    data: {

    },
    methods: {
        loadData() {
            //请求数据接口
            axios.get('../data/sellerInfo.json')
                //请求成功之后的操作
                .then((resp) => {
                    console.log(resp.data);
                    const data = response.data,
                        data_length = data.length;
                    for (let i = 0; i < data_length; i++) {
                        teaInfo.innerHTML += `<li>${data[i].brand} - ${data[i].name} - ${data[i].type}</li>`;
                    }
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