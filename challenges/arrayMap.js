function arrayMap(arr,target){
    
    let start = 0;
    let end = 0;
    let sum = arr[0];

    while(end < arr.length){
        if(sum === target){
            console.log("True true")
            return true;
        } 
        else if (sum < target){
            end++;
            sum += arr[end];
        }
        else if (sum > target){
            sum -= arr[start];
            start++;
        }
    }
    return false;
    
}
