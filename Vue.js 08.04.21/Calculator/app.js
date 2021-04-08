var app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        operator: " "
    },
    computed: {
        addition(){
            return +this.a + +this.b;
        },
        minus(){
            return +this.a - +this.b;
        },
        multiplication(){
            return +this.a * +this.b;
        },
        division(){
            return +this.a / +this.b;
        }
    }
})