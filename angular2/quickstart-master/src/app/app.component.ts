import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<div class="row">
    <form class="col s12">
        <div class="row">
            <div class="input-field col s6">
                <i class="material-icons prefix text-muted">search</i>
                <input (keyup)="search($event)" id="icon_prefix" type="text" class="validate" v-model="search_term">
                <label for="icon_prefix">Search term</label>
            </div>
        </div>
        <div v-if="search_term" class="row text-muted" class="search-box">
            <i class="material-icons search">hourglass_empty</i> {{message}}
        </div>
    </form>
</div>
<div class="row">
    <div class="col s12 m3" *ngFor="let card of cards">
        <div class="card">
            <div class="card-image">
                <img src="{{card.img_src}}">
                <span class="card-title">{{card.title}}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
                <p v-sp-grey>{{card.description}}</p>
            </div>
        </div>
    </div>
</div>
  `,
})
export class AppComponent  { 
    message = '';
    search_term: null;
    cards = [
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

    search(event: any) {
        this.message = 'Searching for ' + event.target.value + '...';
    }
}
