import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {

    PS = {
        title: "Performance status",
        description: "ECOG performance status rating",
        items: [
            {
                score: "0",
                image: "",
                summary: "Fully active."
                , description: "Fully active, able to carry on all pre-disease performance without restriction."
            }
            , {
                score: "1",
                image: "",
                summary: "Restricted activity.",
                description: "Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature, e.g., light house work, office work "
            }
            , {
                score: "2",
                image: "",
                summary: "Ambulatory.",
                description: "Ambulatory and capable of all selfcare but unable to carry out any work activities. Up and about more than 50% of waking hours."
            }
            , {
                score: "3",
                image: "",
                summary: "Limited selfcare.",
                description: "Capable of only limited selfcare, confined to bed or chair more than 50% of waking hours."
            }
            , {
                score: "4",
                image: "",
                summary: "Completely disabled.",
                description: "Completely disabled. Cannot carry on any selfcare. Totally confined to bed or chair."
            }
            , {
                score: "5",
                image: "",
                summary: "Dead.",
                description: "Dead."
            }
        ]
    };

    Frailty = {
        title: "Frailty",
        description: "Frailty score",
        items: [{
            score: "1",
            name: "Very Fit",
            image: "./img/capture1.jpg",
            description: "People who are robust, active, energetic and motivated. These people commonly exercise regularly. They are among the fittest for their age.",
            questions: ["How far can you walk?", "What kind of exercise (if any) do you do?", "Do you have carer responsibilities?", "Have you ever smoked?", "Do you ever drink alcohol?", "Is there anyone that could look after you while you’re unwell?", "Do you drive?", "Have you travelled abroad recently?", "Pick one thing and ask how it’s changed over time.", "What are you goals?", "What is important to you about discharge?"]
        },
            {
                score: "2",
                name: "Well",
                image: "./img/capture2.jpg",
                description: "People who have no active disease symptoms but are less fit than category 1.Often, they exercise or are very active occasionally, e.g. seasonally.",
                questions: ["How far can you walk?", "What kind of exercise (if any) do you do?", "Do you have carer responsibilities?", "Have you ever smoked?", "Do you ever drink alcohol?", "Is there anyone that could look after you while you’re unwell?", "Do you drive?", "Have you travelled abroad recently?", "Pick one thing and ask how it’s changed over time.", "What are you goals?", "What is important to you about discharge?"]
            },
            {
                score: "3",
                name: "Managing Well",
                image: "./img/capture3.jpg",
                description: "People whose medical problems are well controlled, but are not regularly active beyond routine walking.",
                questions: ["How far can you walk?", "What kind of exercise (if any) do you do?", "Do you have carer responsibilities?", "Have you ever smoked?", "Do you ever drink alcohol?", "Is there anyone that could look after you while you’re unwell?", "Do you drive?", "Have you travelled abroad recently?", "Pick one thing and ask how it’s changed over time.", "What are you goals?", "What is important to you about discharge?"]
            },
            {
                score: "4",
                name: "Vunerable",
                image: "./img/capture4.jpg",
                description: "While not dependent on others for daily help, often symptoms limit activities. A common complaint is being “slowed up”, and/or being tired during the day.",
                questions: ["How far can you walk?", "What kind of exercise (if any) do you do?", "How often do you get out in the week?", "If you go out who goes with you and how do you travel?", "Have you travelled abroad recently?", "Do you use a walking aid inside/outside?", "Do you have carer responsibiltities?", "Do you nap in the day?", "Do you struggle on the stairs?", "Who prepares food/drinks?", "Who does shopping/laundry?", "Have you ever smoked?", "Do you drink alcohol?", "Pick one thing and asked how it’s changed over time.", "What are you goals?", "What is important to you about discharge?"]
            },
            {
                score: "5",
                name: "Mildly Frail",
                image: "./img/capture5.jpg",
                description: "These people often have more evident slowing, and need help in high order IADLs(finances, transportation, heavy housework, medications). Typically, mild frailty progressively impairs shopping and walking outside alone, meal preparation and housework.",
                questions: ["How far can you walk?", "What kind of exercise (if any) do you do?", "How often do you get out in the week?", "If you go out who goes with you and how do you travel?", "Have you travelled abroad recently?", "Do you use a walking aid inside/outside?", "Do you have carer responsibiltities?", "Do you nap in the day?", "Do you struggle on the stairs?", "Who prepares food/drinks?", "Who does shopping/laundry?", "Have you ever smoked?", "Do you drink alcohol?", "Pick one thing and asked how it’s changed over time.", "What are you goals?", "What is important to you about discharge?"]
            },
            {
                score: "6",
                name: "Moderately Frail",
                image: "./img/capture6.jpg",
                description: "People need help with all outside activities and with keeping house. Inside, they often have problems with stairs and need help with bathing and might need minimal assistance (cuing, standby) with dressing.",
                questions: ["Days of the week mnemonic:-", "-Mobility", "-Transfers", "-Washing/dressing", "-Toileting", "-Feeding", "-Shower/bath", "-Stairs", "Who handles the money?", "Do you use the telephone?", "Who does the shopping/laundry?", "How often do you get out of the house?", "If you go out, who goes with you and how do you travel?", "Do you like the nursing home?", "Overnight, can you walk to the bathroom?  If not, do you use commode/bottle?", "Do you feel scared about falling?", "Any problems with wandering, aggression, getting lost?", "What are you goals?", "What is important to you about discharge?"]
            },
            {
                score: "7",
                name: "Severely Frail",
                image: "img/capture7.jpg",
                description: "Completely dependent for personal care, from whatever cause (physical or cognitive). Even so, they seem stable and not at high risk of dying (within ~ 6 months).",
                questions: ["Days of the week mnemonic:-", "-Mobility", "-Transfers", "-Washing/dressing", "-Toileting", "-Feeding", "-Shower/bath", "-Stairs", "Who handles the money?", "Do you use the telephone?", "Who does the shopping/laundry?", "How often do you get out of the house?", "If you go out, who goes with you and how do you travel?", "Do you like the nursing home?", "Overnight, can you walk to the bathroom?  If not, do you use commode/bottle?", "Do you feel scared about falling?", "Any problems with wandering, aggression, getting lost?", "What are you goals?", "What is important to you about discharge?"]
            },
            {
                score: "8",
                name: "Very Severely Frail",
                image: "img/capture8.jpg",
                description: "Completely dependent,approaching the end of life. Typically, they could not recover even from a minor illness.",
                questions: [""]
            },
            {
                score: "9",
                name: "Terminally Ill",
                image: "img/capture9.jpg",
                description: "Approaching the end of life. This category applies to people with a life expectancy <6 months, who are not otherwise evidently frail.",
                questions: [""]
            }
        ]
    };

    delerium = {
        title: "Delerium Checklist",
        description: "Consider the following:",
        items: [
            {
                name: "Link for more information",
                link: "<a href='https://www.whatdotheyknow.com/request/238377/response/593545/attach/4/Delirium%20toolkit.pdf'>More Info</a>"
            },
            {
                name: "Constipation",
                description: "Do a PR to check for impaction"
            },
            {
                name: "Urinary retention",
                description: "Do a bladder scan"
            },
            {
                name: "Subdural haemorrhage",
                description: "Consider doing a do a head CT if suspected"
            },
            {
                name: "Acute coronary syndrome",
                description: "Do an ECG if suspected"
            },
            {
                name: "Hypoxia",
                description: "Look at oxygen saturation and the rest of the obs"
            },
            {
                name: "Infection",
                description: "Clinical examination and bloods (chest, urine, gallbladder, throat, skin, CNS..)"
            },
            {
                name: "Hypo or hyperglycaemia- ",
                description: "Do a BM"
            },
            {
                name: "Medication",
                description: "Look at the drug card for cogntitively active drugs"
            },
            {
                name: "Pain ",
                description: "Ask about pain – is the person grimacing?  Do family members think they’re in pain?"
            },
            {
                name: "Parkinson’s disease ",
                description: "Have they had exactly the right medication- dopamine withdrawal could be a problem if not."
            },
            {
                name: "Alcohol history",
                description: "Could they be withdrawing?"
            }
        ]
    };

    dementia = {
        title: "Dementia history questions",
        description: "",
        items: [
            {
                name: "Ask the family",
                description: "over how long do you think there have been memory problems?"
            },
            {
                name: "How have things changed over time? Have things got gradually worse or worse suddenly?"
            },
            {
                name: "Has any of this been related to an illness such as an infection?"
            },
            {
                name: "Do you ever struggle keeping track of what day it is?"
            },
            {
                name: "Do you ever get mixed up about what time of day it is and maybe get up at night?"
            },
            {
                name: "When you hear family news are you able to take it in and remember it? Do you ever repeat the information? What do family think?"
            },
            {
                name: "What about the news on the television? Do you follow it and can you think of a recent news article?"
            },
            {
                name: "Do you ever find you can't quite recall who people are?"
            },
            {
                name: "Do you lose things at home?"
            },
            {
                name: "Do you manage to keep a track of bills?"
            },
            {
                name: "Can you use your bank card and pin?"
            },
            {
                name: "Do you know which coin is which?"
            },
            {
                name: "Do you own your own home?"
            },
            {
                name: "Do you go out on your own or just with family?"
            },
            {
                name: "Have you ever got lost?"
            },
            {
                name: "Any falls or blackouts?"
            },
            {
                name: "Any strokes or mini-strokes?"
            },
            {
                name: "A funny questions- do you ever find your bed covers are on the floor in the morning? (screening for dementia with lewy bodies)"
            },
            {
                name: "Sometimes if you have problems with your memory you might also have problems with seeing or hearing things- have you ever had that?"
            },
            {
                name: "Any worries people are trying to harm you?"
            },
            {
                name: "Do you use a cooker? What type of cooker? Do you ever leave a pan on? "
            },
            {
                name: "Do you have smoke alarms? Are they connected to care connect?"
            },
            {
                name: "Do you drive?"
            },
            {
                name: "Any concerns about behaviour?"
            },
            {
                name: "How has your mood been?"
            }
        ]
    };

    transient = {
        title:"Transient loss of consciousness checklist",
        description: "",
        items: [
            {
              name:"Link for more details",
              link:"<a href='http://pathways.nice.org.uk/pathways/transient-loss-of-consciousness#path=view%3A/pathways/transient-loss-of-consciousness/initial-assessment-for-transient-loss-of-consciousness.xml&content=view-node%3Anodes-12-lead-ecg'>More Info</a>"
            },
            {
                name: "What happened - before, during, after?",
                description:"Before (any prodrome? Sit to stand? Environment?), during (can you remember going down? injury? Tongue biting lateral sides?  Urinary incontinence? Collateral history? Duration?), after (confused after event? Any weakness down one side afterwards?)"
            },
            {
                name: "Observations",
                description:"BP, P, oxygen sats, RR"
            },
            {
                name: "Examination",
                description:"check pulse, any murmur?  Signs of heart failure?"
            },
            {
                name: "Red flags",
                description:"Anyone in the family died suddenly under age 40? Breathless (new or unexplained)? Any sign heart failure? Any heart murmur? Syncope during exertion"
            },
            {
                name: "See the ECG",
                description:"Red flags- heart block or bundle branch block, long or short QT interval, ST or T wave abnormalities, short PR interval (look for WPW) "
            },
            {
                name: "ECG abnormalities not to miss",
                description:"See Scales page for ECG abnormalities"
            }
      ]};

abnormalities = {
    title: "ECG Abnormalities not to miss",
    description: "",
    items: [{
        name: "Bradycardia",
        description: "(pulse under 60)"
        },
        {
            name: "Ventricular arrthymias ",
            description: "including multiple ventricular ectopic beats"
        },
        {
            name: "Long QT",
            description: "(corrected QT >450)"
        },
        {
            name: "Short QT",
            description: "(corrected QT <350)"
        },
        {
            name: "Brugada syndrome - link",
            description: "(ST elevation in V1-3 with inverted T in conjunction with syncope, commoner in Asian males, can be transient and unmasked by illness)",
            link: "<a href='http://lifeinthefastlane.com/ecg-library/brugada-syndrome/'>Brugada Syndrome</a>"
        },
        {
            name: "Left ventricular hypertrophy -link",
            description: "(thickened ventricle which is associated with ventricular and supraventricular arrthymias and also sudden cardiac death.  Deep S waves (the wave that goes down in the QRS) in V 1-3 and tall R waves in lateral leads V4-6, also other abnormalities outlined here:",
            link: "<a href='http://lifeinthefastlane.com/ecg-library/basics/left-ventricular-hypertrophy/)'>Left ventricular hypertrophy</a>"
        },
        {
            name: "Right ventricular hypertrophy - link",
            description: "(RSR1 pattern in v 1, right axis deviation, st depression and t wave inversion in v1-4 (anterior leads) and sometimes also inferior leads (II, III, AVL)   ",
            link: "<a href='http://lifeinthefastlane.com/ecg-library/basics/right-ventricular-hypertrophy/)'>Right ventricular hypertrophy</a>"
        },
        {
            name: "Wolf-Parkinson-White or other pre-excitation -link",
            description: "This is where an accessory pathway conducts electricity via a shortcut from atria to ventricles and often back again. So the PR interval is short (<120ms or less than 3 small squares), and in WPW there is a broad slurred upstroke to the first part of the QRS (delta wave) which is the ventricles being activated via the accessory pathway.  In WPW the QRS is broad but in other syndromes it may be normal. ",
            link: "<a href='http://lifeinthefastlane.com/ecg-library/pre-excitation-syndromes/)'>Pre-Excitation syndromes</a>"

        },
        {
            name: "Pathological Q waves",
            description: "suggests previous completed MI and therefore increased risk of cardiac syncope secondary to ventricular arrrthymia."
        },
        {
            name: "Changes suggestive of STEMI/ angina",
            description: "Abnormal T wave inversion/ST changes "
        }
    ]};


scalesList = [this.Frailty, this.PS, this.delerium, this.dementia, this.transient, this.abnormalities];
scales;

constructor() {
    let collection = [];
    this.scalesList.forEach(function(item) {
        collection.push(item);
    })
    this.scales = collection;

}
getData(){
    return this.scales;
}
}
