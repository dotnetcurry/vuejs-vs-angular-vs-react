

angular.module('app', [])
  .controller('AppController', function() {
    var app = this;
    this.cards = [
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
    ];

    this.search = function () {
        app.message = 'Searching for ' + app.search_term + '...';
    };
  });
angular.module('app').directive('psGrey', function () {
    return {
        restrict: 'A',     
        scope: {
        },
        link: function(scope, element, attrs) {
            element.css({'color': 'lightgrey'});
            element.text(attrs.text);
        }
    };
});
