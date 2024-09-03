import logo from './logo.jpg'
import sameer from './Sameer.png'
import google_play_store from "./Google_Play_Store.webp"
import Linked_in from './Linked_in.png'
import Facebook from './Facebook.png'
import Twitter from './Twitter.png'
import background from './background.jpg'
import Cardiologist from './Cardiologist.jpg'
import Dermatologist from './Dermatologist.jpg'
import Neurologist from './Neurologist.jpg'
import Ophthalmologist from './Ophthalmologist.jpg'
import Orthopedist from './Orthopedist.jpg' 
import Pediatrician from './Pediatrician.jpg'
import Psychiatrist from './Psychiatrist.jpg'
import Pulmonologist from './Pulmonologist.jpg'
import Urologist from './Urologist.jpg'
import Appstore from './App_Store.png'
import profile_icon from './profile_icon.png'
import logout_icon from './logout_icon.png'

export const Assets = {
    logo,
    background,
    Linked_in,
    Facebook,
    Twitter,
    google_play_store,
    Appstore,
    profile_icon,
    logout_icon
}
const category=[
    "Urologist",
    "Cardiologist",
    "Neurologist",
    "Dermatologist",
    "Pediatrician",
    "Orthopedist",
    "Psychiatrist",
    "Pulmonologist",
    "Ophthalmologist"
];
export const specialization_list = [
    {
        specialist_name: "Urologist",
        specialist_image: Urologist
    },
    {
        specialist_name: "Pulmonologist",
        specialist_image: Pulmonologist
    },
    {
        specialist_name: "Psychiatrist",
        specialist_image: Psychiatrist
    },
    {
        specialist_name: "Pediatrician",
        specialist_image: Pediatrician
    },
    {
        specialist_name: "Orthopedist",
        specialist_image: Orthopedist
    },
    {
        specialist_name: "Ophthalmologist",
        specialist_image: Ophthalmologist
    },
    {
        specialist_name: "Neurologist",
        specialist_image: Neurologist
    },
    {
        specialist_name: "Dermatologist",
        specialist_image: Dermatologist
    },
    {
        specialist_name: "Cardiologist",
        specialist_image: Cardiologist
    },
]
const specialist_name="Sameer";
const specialist_image=sameer;
const  specialization_people=[];
category.forEach(category =>{
    for(let i=0;i<6;i++){
        specialization_people.push({
            specialist_name,
            specialist_image,
            specialist_category:category
        });
    }
});
export default specialization_people;
