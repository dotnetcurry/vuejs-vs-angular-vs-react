Vue.directive('sp-grey', {
    inserted: function (el) {
        el.style.color = 'lightgrey';
    }
});
var app = new Vue({
    el: '#app',
 
    data: {
        message: '',
        search_term: null,
        cards: [
            {
                title: 'Sunrise with palm trees',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
                img_src: "img/1.jpg" 
            },
            { 
                title: 'Sunrise',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                img_src: "img/2.jpg" 
            },
            { 
                title: 'Copacabana sunrise',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                img_src: "img/3.jpg" 
            },
            { 
                title: 'Surfer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                img_src: "img/4.png" 
            }
        ]
    },
    methods: {
        search: function () {
            this.message = 'Searching for ' + this.search_term + '...';
        }
    }
});
