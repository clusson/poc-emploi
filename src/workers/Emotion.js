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
    return emoMax
    // listEmotions.forEach(function(emo){
    //     console.log(emo)
    // });
    

})
.catch(function(res){ console.log(res) })

// fetch(faceApiLink,
// {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/octet-stream',
//       'Ocp-Apim-Subscription-Key': faceApiKey
//     },
//     method: "POST",
//     body: '{"url": ' + '"' + sourceImageUrl + '"}'
// })
// .then(function(res){ console.log(res) })
// .catch(function(res){ console.log(res) })
// $.ajax({
//     url: faceApiLink + "?" + $.param(params),

//     // Request headers.
//     beforeSend: function(xhrObj){
//         xhrObj.setRequestHeader("Content-Type","application/json");
//         xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", faceApiKey);
//     },

//     type: "POST",

//     // Request body.
//     data: '{"url": ' + '"' + sourceImageUrl + '"}',
// })

// .done(function(data) {
//     // Show formatted JSON on webpage.
//    return JSON.stringify(data, null, 2);
// })

// .fail(function(jqXHR, textStatus, errorThrown) {
//     // Display error message.
//     var errorString = (errorThrown === "") ?
//         "Error. " : errorThrown + " (" + jqXHR.status + "): ";
//     errorString += (jqXHR.responseText === "") ?
//         "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
//             jQuery.parseJSON(jqXHR.responseText).message :
//                 jQuery.parseJSON(jqXHR.responseText).error.message;
//     alert(errorString);
// });
};
