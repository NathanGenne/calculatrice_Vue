const randVue = new Vue({
    el: '#calculatrice',
    data: {
        display: '0'
      },

    methods: {
        append(number) {
            if (this.display === '0') {this.display = number}
            else this.display = '' + this.display + number;
        }
      }
})