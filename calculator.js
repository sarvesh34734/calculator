var buttons=document.getElementsByClassName("common");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;
var plsMnsClicks=0;
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function(){

        var value=this.getAttribute("data-value")
        console.log(value);
        if(value=="/" || value=="*" || value=="+" || value=="-" || value=="%")
        {
            console.log("inside if");
            var operand1String=document.getElementById("displayText").textContent;
            operand1=parseFloat(operand1String);
            document.getElementById("displayText").innerText=value;
            operator=value;

        }
        else if(value=="=")
        {
            console.log("equla to");
            var operand2String=document.getElementById("displayText").textContent;
            operand2=parseFloat(operand2String);
            if(operator=="/" && operand2==0)
            {
                document.getElementById("displayText").innerText="DivisionByZero";
            }
            else{
                document.getElementById("displayText").innerText=eval(operand1+" "+operator+" "+operand2);
            }
        }
        else if(value=="+/-")
        {
            console.log("+/-")
            plsMnsClicks++;
            var previousText=document.getElementById("displayText").textContent;
            var firstCharacter=previousText.charAt(0);
            if(firstCharacter!="-")
            {
                document.getElementById("displayText").innerText="-"+previousText;
            }
            else{
                document.getElementById("displayText").innerText=previousText.substring(1);
            }

        }
        else if(value=="AC")
        {
            console.log("ac")
            document.getElementById("displayText").innerText=0;
            operand1=0;
            operand2=null;
        }
        else if(value==".")
        {
            console.log("decimal");
            var disText=document.getElementById("displayText").textContent;
            if(disText!="+" || disText!="*" || disText!="/" || disText!="-" || disText!="%")
            {
                
                if(!disText.includes("."))
                {
                    document.getElementById("displayText").innerText=disText+".";
                }
            }
        }
        else{
            console.log("number");
            var previousValue=document.getElementById("displayText").textContent;
            if(previousValue=="0")
            {
                document.getElementById("displayText").innerText=value;
            }
            else if(previousValue=="+" || previousValue=="-" || previousValue=="/" || previousValue=="*" || previousValue=="%")
            {
                document.getElementById("displayText").innerText=value;
            }
            else if(previousValue.length==9)
            {
                document.getElementById("displayText").innerText=previousValue;
            }
            else{
                document.getElementById("displayText").innerText=previousValue+value;
            }
            
        }



    })
}