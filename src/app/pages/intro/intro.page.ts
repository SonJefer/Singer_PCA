import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntroPage implements OnInit {

  intro_content = [
    
    {
    image: "",
    title: "",
    subtitle: ""

    },
    
    {
    image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/23/eb/2423eb78-f721-b1ce-2cf3-8d135b8d28b3/8721253672821.png/600x600bf-60.jpg",
    title: "CHOOSE YOUR TASTE CAREFULY",
    subtitle: "+1000 TRACK BY POPULAR MUSICAN "

    },
    {
    image: "https://i.pinimg.com/474x/2d/0a/96/2d0a96c33530716a6516c04322f77bcf.jpg",
    title: "ENJOY BEAUTIFUL MUSIC",
    subtitle: "DISCOVER DIFFERNT TYPES OF ART"

    },
    {
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPDlVJkdoFJP1ooQoji7H0hilUyd2PaeJTx5-d0pktMZkLtfLx",
    title: "LISTEN ANYWHERE ANYTIME",
    subtitle: "FULL FREE EXEPERIENCE"
    }
  
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
