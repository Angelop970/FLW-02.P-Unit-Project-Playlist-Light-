// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
var imgUrl;

// var artistName;

var pageUrl;


// task 7: create and populate an array (also called "list") to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

const albumImageUrl = [ "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Fhippo-campus%2Fsouth-1&psig=AOvVaw3Dv9izXa50dLShR3E97u9o&ust=1673568145652000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCID0navdwPwCFQAAAAAdAAAAABAD", 
"https://t2.genius.com/unsafe/818x818/https%3A%2F%2Fimages.genius.com%2F9ef15577fbd0f0100ca6af7be356dd6f.800x800x1.jpg",
"https://t2.genius.com/unsafe/818x818/https%3A%2F%2Fimages.genius.com%2Fa6651e251e60cc068dd19eec894819f9.1000x1000x1.png", 
"https://t2.genius.com/unsafe/783x783/https%3A%2F%2Fimages.genius.com%2Fe1ab0ca3263ae115023bee980392a352.350x350x1.jpg",
"https://t2.genius.com/unsafe/818x818/https%3A%2F%2Fimages.genius.com%2F9fc3d05858ba15af6d48cf9e8d08f0bc.225x225x1.jpg" ];

const songNames = [ "south", "Deadbeat Girl", "Live At The Swamp", "CDMX", "Melancoly"];

const artistName = ["Hippo Campus" ,
"Day wave",
"Peach pit",
"Last dinosaurs",
"Human Tetris"
]; 

const soundLink = ["https://youtu.be/Ure4jaEue5U",
"https://youtu.be/JWewokoSdu0" , 
"https://youtu.be/C2DEoyz2GSA",
"https://youtu.be/3VIUVndZn6Y",
"https://youtu.be/l8tmbCP7zaY" 
  
]; 


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
class websiteDetails{
   constructor(inImgUrl,inSongName, inArtist, inSongLink) {
    this.inImgUrlmgUrl = imgUrl;
    this.inSongName = songName;
    this.inArtist = artist;
    this.insongLink = songLink;
  }
}
let south = new websiteDetails("https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Fhippo-campus%2Fsouth-1&psig=AOvVaw3Dv9izXa50dLShR3E97u9o&ust=1673568145652000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCID0navdwPwCFQAAAAAdAAAAABAD","south", "Hippo Campus", "https://youtu.be/Ure4jaEue5U","https://youtu.be/JWewokoSdu0");
  //repeat for all the songs 
let DeadbeatGirl = new websiteDetails( "https://t2.genius.com/unsafe/818x818/https%3A%2F%2Fimages.genius.com%2F9ef15577fbd0f0100ca6af7be356dd6f.800x800x1.jpg","Deadbeat Girl","Day wave","https://youtu.be/C2DEoyz2GSA");

let LiveAtTheSwamp = new websiteDetails("https://t2.genius.com/unsafe/818x818/https%3A%2F%2Fimages.genius.com%2Fa6651e251e60cc068dd19eec894819f9.1000x1000x1.png","Live At The Swamp", "Peach pit", "https://youtu.be/C2DEoyz2GSA");

let CDMX = new websiteDetails("https://t2.genius.com/unsafe/783x783/https%3A%2F%2Fimages.genius.com%2Fe1ab0ca3263ae115023bee980392a352.350x350x1.jpg","CDMX", "Last dinosaurs", "https://youtu.be/3VIUVndZn6Y");

let Melancoly = new websiteDetails("https://t2.genius.com/unsafe/818x818/https%3A%2F%2Fimages.genius.com%2F9fc3d05858ba15af6d48cf9e8d08f0bc.225x225x1.jpg","Melancoly", "Human Tetris","https://youtu.be/l8tmbCP7zaY"); 


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.


function addSongInfo() {

let  
// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
for(let i = 0; index)  
Image-URL.insertAdjacentHTML("beforeend", `<image>${}</image>`);
Song-Name.insertAdjacenHTML("beforeend", `<song-name>${}</song-name>`);
Artist.insertAdjacentHTML("beforeend",`<artist>${}</artist>`)
Song-Link-Address.insertAdjacentHTML("beforeend", `<song-link>${}</song-link>`)
}
//add the name of the .lenght to line 105 and loop the thing.

// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
