function dropHandler(ev){
    console.log('Image dropped');

    //Stop opening file by default
    ev.preventDefault();

    var allowedExtensions =
        /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if(ev.dataTransfer.items){
        //use DataTransferItemList interface to access images
        for(var i = 0; i < ev.dataTransfer.items.length; i++){
            if(!allowedExtensions.exec(filePath)){
                alert('Invalid file type');
                continue;
            }
            if(ev.dataTransfer.items){
                var file = ev.dataTransfer.items[i].getAsFile();
                console.log('... file[' + i + '].name = ' + file.name);
            } else {
                for (var i = 0; i < ev.dataTransfer.files.length; i++){
                    console.log('...file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
                }
            }
            

        }
    }
}