var app = new Vue({
    el        : '#app',
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
  })