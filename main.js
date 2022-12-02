Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach (   '#camera'   );

function take_snapshot(
{
    Webcam.snap(function(data_uri)) {
        document.getElementById(result).innerhtml = '<img id="captured_image"'+data_uri+'"/>
    }
}
);

console.log('ml5 version:',ml5.version);
classifierv = ml5.imageClassifier(https://storage.googleapis.com/tm-model/v_sl95BzE/model.json)