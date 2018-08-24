function getImage(fileName) {
    this.fileName = fileName;
    this.voteTotal = 0;
}

var images = [];
images.push(new getImage("bag.jpg"));
images.push(new getImage("banana.jpg"));
images.push(new getImage("boots.jpg"));
images.push(new getImage("chair.jpg"));
images.push(new getImage("cthulhu.jpg"));
images.push(new getImage("dragon.jpg"));
images.push(new getImage("pen.jpg"));
images.push(new getImage("scissors.jpg"));
images.push(new getImage("shark.jpg"));
images.push(new getImage("sweep.jpg"));
images.push(new getImage("unicorn.jpg"));
images.push(new getImage("usb.jpg"));
images.push(new getImage("water_can.jpg"));
images.push(new getImage("wine_glass.jpg"));


function placeRandomImages() {
    var addImage = document.getElementById('images')
    var image = document.createElement('img');
    var header = document.getElementsByTagName('header');
    var instructions = document.createElement('h2');
    //clear the page
    addImage.innerText = "";
    shuffleArray(images);
    //reload images and instructions
    instructions.innerText = "Pick the product you would be most likely to purchase";
    header[0].appendChild(instructions);
    image.setAttribute('src', "img/"+images[0].fileName);
    addImage.appendChild(image);
    addImage.addEventListener('click', trackClicks);
    image = document.createElement('img');
    image.setAttribute('src', "img/"+images[1].fileName)
    addImage.appendChild(image);
    addImage.addEventListener('click', trackClicks);
    image = document.createElement('img');
    image.setAttribute('src', "img/"+images[2].fileName)
    addImage.appendChild(image);
    addImage.addEventListener('click', trackClicks);
}

function shuffleArray(array) {
    var newLength = array.length
    while (newLength) {
        var ranNum = Math.floor(Math.random() * newLength--);
        var swap = array[newLength];
        //switch newLength with the ranNum
        array[newLength] = array[ranNum];
        //now switch ranNum with newLength
        array[ranNum] = swap;
    } 
    return array; 
} 

function resultsPage() {
    var addImage = document.getElementById('images');
    addImage.innerText = "";
    console.log(addImage);
    var image = document.createElement('img');
    console.log(image);
    image.setAttribute('src', "img/"+images[0].fileName);
    console.log(image);
    image.innerText = 'Top Choice';
    addImage.appendChild(image);
    console.log(addImage);
}

var totalClicks = 0;
function trackClicks(event) {
    //add click to vote total key of each image object
    for (var index = 0; index < images.length; index++) {
        if (event.target.attributes[0].value == 'img/'+ images[index].fileName) {
            images[index].voteTotal++
            console.log('img/'+ images[index].fileName + images[index].voteTotal);
        }
    }
    //add click to total clicks variable
    totalClicks++
    console.log(totalClicks);
    //after 3 clicks - run this function for results page
    if (totalClicks == 3) {
        console.log('clicked 3 times');
        resultsPage();
    } else { //otherwise, replace with 3 new images to continue voting
        placeRandomImages();
    }   
}

window.addEventListener('load', placeRandomImages);
