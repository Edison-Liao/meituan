//视图模型(View Model,又叫做"根实例")
new Vue({
    el: "#app",
    //数据源(Model,数据模型)
    data: {
        userInfo: {
            name: '',
            age: '',
            gender: '',
            hobby: []
        },
        roleThead: ['姓名', '年龄', '性别', '爱好'],
        roleList: [{
            name: '小李',
            age: 23,
            gender: '男',
            hobby: ['格斗', '游泳']
        }]
    },
    filters: {
        arrToStr(val) {
            if (!Array.isArray(val)) {
                return val;
            }
            return val.join("、")
        }
    },
    methods: {
        affirmAdd() {
            this.roleList.push(this.userInfo);
            this.userInfo = {
                name: '',
                age: '',
                gender: '',
                hobby: []
            }
        }
    }

});