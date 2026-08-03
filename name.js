function undo(){

    if(history.length > 0){

        let price = history.pop();

        total -= price;
        qty[price]--;

        updateDisplay();

        // Play Undo Sound
        const sound = document.getElementById("undoSound");

        sound.pause();
        sound.currentTime = 0;

        sound.play().catch(function(error){
            console.log("Audio Error:", error);
        });
    }
}
