//declaring the variables

const FirstClassPlusBtn = document.getElementById("firstClassPlusBtn");
const FirstClassMinusBtn = document.getElementById("firstClassMinusBtn");
const economyClassPlusBtn = document.getElementById("economyClassPlusBtn");
const economyClassMinusBtn = document.getElementById("economyClassMinusBtn");
const bookNowBtn = document.getElementById("bookNowBtn");
const backBtn = document.getElementById("backBtn");
const formItems = document.getElementById("formItems");
const confirmation = document.getElementById("confirmation");
//First Class Add Btn Event Listener

firstClassPlusBtn.addEventListener('click', function(){
    addItems("firstClassQuantity", 1, 150);
});

firstClassMinusBtn.addEventListener('click', function(){
    const inputMinValue = document.getElementById("firstClassQuantity").value;
    const inputMinValueNumber = parseInt(inputMinValue);

    //checking whether the input is not less than 0.
    if(inputMinValueNumber>0){ 
        addItems("firstClassQuantity", -1, -150); 
    }
    else{
        alert('Value Can not be negative');
    }
});

economyClassPlusBtn.addEventListener('click', function(){
    addItems("economyClassQuantity", 1, 100);
});

economyClassMinusBtn.addEventListener('click', function(){
    const inputMinValue = document.getElementById("economyClassQuantity").value;
    const inputMinValueNumber = parseInt(inputMinValue);

    //checking whether the  input is not less than 0.
    if(inputMinValueNumber>0){
        addItems("economyClassQuantity", -1, -100); 
    }
    else{
        alert('Value Can not be negative');
    }
});


function addItems(id, increaseQuantity ,addToSubtotal){
    //declaring Common function for each Ticket Type
    const itemQuantity = document.getElementById(id).value;
    const itemQuantityNumber = parseInt(itemQuantity);
    const newQuantity = itemQuantityNumber + increaseQuantity;
    document.getElementById(id).value = newQuantity;
    
    //Updating Total Amount
    const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNumber = parseInt(subTotal);

    const newSubTotalNumber = subTotalNumber + addToSubtotal;
    document.getElementById("subTotal").innerText = newSubTotalNumber;

    //Calculating Tax
    const taxAmount =  (newSubTotalNumber * 10) /100;
    document.getElementById("tax").innerText = taxAmount;

    //Calculating the Total fare

    const grandTotal = newSubTotalNumber + taxAmount;
    document.getElementById("grandTotal").innerText = grandTotal;
}


//extras

bookNowBtn.addEventListener('click', function(){
    
    let totalFare = document.getElementById("grandTotal").innerText;
    
    if(totalFare != 0){
        document.getElementById("totalFare").innerText = totalFare;
    }else{
        alert('Please add at least one ticket');
    }

    confirmation.style.display = "block";
    formItems.style.display = "none";
});

backBtn.addEventListener('click', function(){
   
    confirmation.style.display = "none";
    formItems.style.display = "block";
   
    
});





