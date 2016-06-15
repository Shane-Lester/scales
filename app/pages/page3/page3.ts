import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ScaleDetailPage} from '../scale-detail/scale-detail';

@Component({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
  scales: Array<any>;
  constructor(private nav: NavController) {
    this.nav = nav;
      this.scales = [
          {
              title: "Frailty",
              description: "Frailty score",
              items: [{
                  score: "1",
                  name: "Very Fit",
                  image: "./img/capture1.jpg",
                  description: "People who are robust, active, energetic and motivated. These people commonly exercise regularly. They are among the fittest for their age.",
                  questions:["How far can you walk?","What kind of exercise (if any) do you do?","Do you have carer responsibilities?","Have you ever smoked?","Do you ever drink alcohol?","Is there anyone that could look after you while you’re unwell?","Do you drive?","Have you travelled abroad recently?","Pick one thing and ask how it’s changed over time.","What are you goals?","What is important to you about discharge?"]
              },
                  {
                      score: "2",
                      name: "Well",
                      image: "./img/capture2.jpg",
                      description: "People who have no active disease symptoms but are less fit than category 1.Often, they exercise or are very active occasionally, e.g. seasonally.",
                      questions:["How far can you walk?","What kind of exercise (if any) do you do?","Do you have carer responsibilities?","Have you ever smoked?","Do you ever drink alcohol?","Is there anyone that could look after you while you’re unwell?","Do you drive?","Have you travelled abroad recently?","Pick one thing and ask how it’s changed over time.","What are you goals?","What is important to you about discharge?"]
                  },
                  {
                      score: "3",
                      name: "Managing Well",
                      image: "./img/capture3.jpg",
                      description: "People whose medical problems are well controlled, but are not regularly active beyond routine walking.",
                      questions:["How far can you walk?","What kind of exercise (if any) do you do?","Do you have carer responsibilities?","Have you ever smoked?","Do you ever drink alcohol?","Is there anyone that could look after you while you’re unwell?","Do you drive?","Have you travelled abroad recently?","Pick one thing and ask how it’s changed over time.","What are you goals?","What is important to you about discharge?"]
                  },
                  {
                      score: "4",
                      name: "Vunerable",
                      image: "./img/capture4.jpg",
                      description: "While not dependent on others for daily help, often symptoms limit activities. A common complaint is being “slowed up”, and/or being tired during the day.",
                      questions:["How far can you walk?","What kind of exercise (if any) do you do?","How often do you get out in the week?","If you go out who goes with you and how do you travel?","Have you travelled abroad recently?","Do you use a walking aid inside/outside?","Do you have carer responsibiltities?","Do you nap in the day?","Do you struggle on the stairs?","Who prepares food/drinks?","Who does shopping/laundry?","Have you ever smoked?","Do you drink alcohol?","Pick one thing and asked how it’s changed over time.","What are you goals?","What is important to you about discharge?"]
                  },
                  {
                      score: "5",
                      name: "Mildly Frail",
                      image: "./img/capture5.jpg",
                      description: "These people often have more evident slowing, and need help in high order IADLs(finances, transportation, heavy housework, medications). Typically, mild frailty progressively impairs shopping and walking outside alone, meal preparation and housework.",
                      questions:["How far can you walk?","What kind of exercise (if any) do you do?","How often do you get out in the week?","If you go out who goes with you and how do you travel?","Have you travelled abroad recently?","Do you use a walking aid inside/outside?","Do you have carer responsibiltities?","Do you nap in the day?","Do you struggle on the stairs?","Who prepares food/drinks?","Who does shopping/laundry?","Have you ever smoked?","Do you drink alcohol?","Pick one thing and asked how it’s changed over time.","What are you goals?","What is important to you about discharge?"]
                  },
                  {
                      score: "6",
                      name: "Moderately Frail",
                      image: "./img/capture6.jpg",
                      description: "People need help with all outside activities and with keeping house. Inside, they often have problems with stairs and need help with bathing and might need minimal assistance (cuing, standby) with dressing.",
                      questions:["Days of the week mnemonic:-","-Mobility","-Transfers","-Washing/dressing","-Toileting","-Feeding","-Shower/bath","-Stairs","Who handles the money?","Do you use the telephone?","Who does the shopping/laundry?","How often do you get out of the house?","If you go out, who goes with you and how do you travel?","Do you like the nursing home?","Overnight, can you walk to the bathroom?  If not, do you use commode/bottle?","Do you feel scared about falling?","Any problems with wandering, aggression, getting lost?","What are you goals?","What is important to you about discharge?"]
                  },
                  {
                      score: "7",
                      name: "Severely Frail",
                      image: "img/capture7.jpg",
                      description: "Completely dependent for personal care, from whatever cause (physical or cognitive). Even so, they seem stable and not at high risk of dying (within ~ 6 months).",
                      questions:["Days of the week mnemonic:-","-Mobility","-Transfers","-Washing/dressing","-Toileting","-Feeding","-Shower/bath","-Stairs","Who handles the money?","Do you use the telephone?","Who does the shopping/laundry?","How often do you get out of the house?","If you go out, who goes with you and how do you travel?","Do you like the nursing home?","Overnight, can you walk to the bathroom?  If not, do you use commode/bottle?","Do you feel scared about falling?","Any problems with wandering, aggression, getting lost?","What are you goals?","What is important to you about discharge?"]
                  },
                  {
                      score: "8",
                      name: "Very Severely Frail",
                      image: "img/capture8.jpg",
                      description: "Completely dependent,approaching the end of life. Typically, they could not recover even from a minor illness.",
                      questions:[""]
                  },
                  {
                      score: "9",
                      name: "Terminally Ill",
                      image: "img/capture9.jpg",
                      description: "Approaching the end of life. This category applies to people with a life expectancy <6 months, who are not otherwise evidently frail.",
                      questions:[""]
                  }
              ]
          },
          // { title: "Mini-Mental State Exam"
          // , description: "MMSE calculator"},
          { title: "Performance status"
          , description: "ECOG performance status rating"
          ,items:[
            { score:"0",
            image:"",
              summary:"Fully active."
              ,description:"Fully active, able to carry on all pre-disease performance without restriction."}
              ,{ score:"1",
              image:"",
              summary:"Restricted activity.",
                description:"Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature, e.g., light house work, office work "}
              ,{ score:"2",
              image:"",
              summary:"Ambulatory.",
                description:"Ambulatory and capable of all selfcare but unable to carry out any work activities. Up and about more than 50% of waking hours."}
              ,{ score:"3",
              image:"",
              summary:"Limited selfcare.",
                description:"Capable of only limited selfcare, confined to bed or chair more than 50% of waking hours."}
              ,{ score:"4",
              image:"",
              summary:"Completely disabled.",
                description:"Completely disabled. Cannot carry on any selfcare. Totally confined to bed or chair."}
              ,{ score:"5",
              image:"",
              summary:"Dead.",
                description:"Dead."}
          ]}
      ];

  }
  showScale(event, scale, index) {

      this.nav.push(ScaleDetailPage, { scale: scale, scaleIndex: index, ScalePage: this });

    }


  }
