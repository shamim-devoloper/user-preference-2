const selectFontSize=document.getElementById("selectFontSize");
const selectBgColor=document.getElementById("selectBgColor");
const resetButton=document.getElementById("resetButton");
const mainElement=document.querySelector("main");

const setValues=(fontSize,bgColor)=>{
    selectFontSize.value=fontSize;
    selectBgColor.value=bgColor
    mainElement.style.fontSize=fontSize;
    mainElement.style.backgroundColor=bgColor;

}

// load Local Storage Value
const initialSetup=()=>{
   const bgColor=localStorage.getItem("bgColor");
   const fontSize=localStorage.getItem("fonSize");

   if(fontSize && bgColor){
    setValues(fontSize,bgColor);
   
}
if(!fontSize && !bgColor){
    setValues("16px","aqua");
}
if(!bgColor && fontSize){
    setValues(fontSize,bgColor);
}
if(bgColor && !fontSize){
    setValues("16",bgColor);
}


}



// change fontSize
const changeFontSize=(e)=>{
    const selectedFonSize=e.target.value
    mainElement.style.fontSize=selectedFonSize;
    localStorage.setItem("fonSize",selectedFonSize);
}

// change BgColor
const changeBgColor=(e)=>{
    const selectedBgColor=e.target.value
    mainElement.style.backgroundColor=selectedBgColor;
    localStorage.setItem("bgColor",selectedBgColor);
    }


    // clear Local Storage

    const clearLocalStorage=()=>{
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fonSize");
    setValues("16px","aqua")
    
    }
    


// add Event Listener
selectFontSize.addEventListener("change",changeFontSize);
selectBgColor.addEventListener("change",changeBgColor);
resetButton.addEventListener("click",clearLocalStorage);


initialSetup()


