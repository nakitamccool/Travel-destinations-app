import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private summer = {
        type: 'Summer',
        name: 'Semuc Champey',
        country: 'Guatemala',
        rating: 6,
        photo: '../../assets/img/SemucChampey.jpg',
        description: "Keffiyeh single-origin coffee freegan leggings bushwick cronut, selvage vape williamsburg tattooed YOLO neutra kinfolk locavore. Flannel blue bottle waistcoat ennui gentrify, aesthetic banjo meggings cold-pressed humblebrag. Snackwave lomo you probably haven't heard of them fam, iPhone food truck crucifix bicycle rights 8-bit. Cornhole paleo tacos, salvia chillwave snackwave +1 disrupt tousled PBR&B sustainable waistcoat. Fap pug distillery banjo, disrupt fixie woke brunch tattooed pop-up mustache. Marfa swag franzen wolf ramps leggings. Kale chips coloring book health goth fashion axe hammock literally neutra, vice art party cornhole twee raclette.",
        currency: "Guatemalan quetzal",
        peakPeriod: "April to September",
    };
    private winter = {
        type: 'Winter',
        name: 'Queenstown',
        country: 'New Zealand',
        rating: 9,
        photo: '../../assets/img/Queenstown.jpg',
        description:"Umami shabby chic coloring book poutine, put a bird on it tacos unicorn fingerstache deep v la croix tofu affogato offal. Twee salvia blue bottle fam pitchfork polaroid, mumblecore man bun edison bulb fap four loko. Live-edge activated charcoal master cleanse pork belly fam, tote bag jean shorts unicorn synth gluten-free portland. Tumblr subway tile kitsch four dollar toast, scenester seitan cray godard waistcoat etsy pop-up man bun narwhal cardigan. Selfies subway tile edison bulb, leggings truffaut plaid vaporware woke try-hard irony pickled kale chips. Fingerstache bicycle rights activated charcoal, gochujang 90's unicorn jean shorts literally church-key vice fashion axe 3 wolf moon. Austin salvia readymade quinoa celiac.",
        currency: "New Zealand dollar",
        peakPeriod: "September to February",
    };
    private destination = this.summer;
}
