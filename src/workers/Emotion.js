import {faceApiKey, faceApiLink} from './GlobalVar'

function maxValueObject(object){
     return Object.keys(object).reduce((a, b) => object[a] > object[b] ? a : b);
}

export const getEmotion = (pictureLink) => {

// Request parameters.
var params = {
    "returnFaceId": "true",
    "returnFaceLandmarks": "false",
    "returnFaceAttributes": "emotion" 
};

// Display the image.
var sourceImageUrl = pictureLink;
//document.querySelector("#sourceImage").src = sourceImageUrl;

// Perform the REST API call.
return fetch(pictureLink)
.then(res => res.blob())
.then(blobData => {
    return fetch(faceApiLink + "?returnFaceAttributes=emotion" ,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/octet-stream',
              'Ocp-Apim-Subscription-Key': faceApiKey
            },
            method: "POST",
            body: blobData
        })
        
})
.then(res => res.json())
.then(function(res){ 
    var listEmotions = res[0].faceAttributes.emotion
    
    //Object.keys(listEmotions).reduce(previous, current)
    var emoMax = maxValueObject(listEmotions)
    if(emoMax == "anger"){
        return true
    }
    else{
        return false
    }
})
.catch(function(res){ console.log(res) })
};
