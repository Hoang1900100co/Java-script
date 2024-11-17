// Function to handle mouseover event
function upDate(previewPic) {
    // Log to check if the event is triggered
    console.log("Mouseover event triggered");
    console.log("Image src:", previewPic.src);
    console.log("Image alt:", previewPic.alt);
    
    // Change the text content of the div with id 'image'
    const imageDiv = document.getElementById('image');
    imageDiv.textContent = previewPic.alt;

    // Change the background image of the div with id 'image'
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

// Function to handle mouseout event
function unDo() {
    console.log("Mouseout event triggered");

    // Reset the text content and background image
    const imageDiv = document.getElementById('image');
    imageDiv.textContent = "Hover over an image below to display here.";
    imageDiv.style.backgroundImage = "none";
}
