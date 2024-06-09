function stringTransform(str){

    let strLength = str.length;
    
    if (strLength % 3 === 0 || strLength % 5 === 0){
        let strRev = str.split('').reverse().join('');
        console.log(strRev);
        for (let i = 0; i < str.length; i++){
            let charCode = str.charCodeAt(i);
            console.log(charCode);
        }
    }
    else if(strLength % 3 === 0){
        let strRev = str.split('').reverse().join('');
        console.log(strRev);
    }
    else if (strLength % 5 === 0){
        for (let i = 0; i < str.length; i++){
            let charCode = str.charCodeAt(i);
            console.log(charCode)
        }
    }
}

stringTransform("hellogdjwyruiop");