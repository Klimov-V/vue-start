var textarea = new Vue({
    el        : '#textarea',
    data      : {
      message : 'Hello, World!',
      userValue: '',
      shownValue: '',
      isEmpty: true,
    },
    methods   : {
        send  : function () {            
            this.shownValue = this.userValue;
            this.userValue = '';
            this.isEmpty = true;
        },
        check : function() {
            this.isEmpty = this.userValue ? false : true;
        },
    }
});

let button = new Vue({
    el: '#button',
    data: {
        showBlock: false,
        showFstInpt: false,
        showScndInpt: false,
        btn: '',
        hours: 0,
        minutes: 0,
        seconds: '',
    },
    methods: {
        action: function() {
            this.showBlock = true;
        },
        checkBtn: function(e) {
            if (e.button == 0) {
                this.btn = 'левая кнопка мыши';
            } else if (e.button == 1) {
                this.btn = 'средняя кнопка мыши';
            } else {
                this.btn = 'правая кнопка мыши';
            }
            this.showFstInpt = true;

        },
        showTime: function() {
            this.showScndInpt = true;
            let time = new Date();
            this.hours = time.getHours();
            this.minutes = time.getMinutes();
            this.seconds = time.getSeconds();
        }
    }
});
