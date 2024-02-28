setInterval(claimBonus,5000);

function claimBonus(){
    const button = document.querySelector('[aria-label="Claim Bonus"]');
    if(button != null){
        button.click();
        console.log("clicked (Em princípio");
    }else{
        console.log("Not found");
    }
    
}
    
    

