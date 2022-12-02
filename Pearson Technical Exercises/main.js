    const next_click = document.querySelectorAll("#nextBtn");
    const main_form = document.querySelectorAll(".main");
    const step_list = document.querySelectorAll(".progress-bar li");
    const answer_click = document.querySelectorAll("#validateAnswer");
    const test_case_click = document.querySelectorAll(".testCases");
    const num = document.querySelector(".step-number");
    let formNumber = 0;

    answer_click.forEach(function(answer_click_form){
        answer_click_form.addEventListener('click',function(){
            if(!validateform()){
                return false
            }
            changeClassDisplay("loading", true);
            changeClassDisplay("resultMessages", false);
            changeClassDisplay("btn-primary", false);
            changeClassDisplay("btn-secondary", false);
            sleep(1000).then(() => {
                hideMessages();
                switch (formNumber) {
                    // Palindrome
                    case 0:
                        let palindromeInput = document.getElementById("palindromeValue").value;
                        let palindromeAnswer = palindrome(palindromeInput);
                        palindromeAnswer ? changeElementDisplay("palindromeSuccess", true) : changeElementDisplay("palindromeFailure", true);
                        changeElementDisplay("palindromeTestBtn", true);
                    break;
                    // Roman
                    case 1:
                        let romanInput = document.getElementById("romanValue").value;
                        let romanAnswer = romanNumerals(romanInput);
                        document.getElementById('romanNumeralAnswer').innerHTML = `The Roman numerals for ${romanInput} = ${romanAnswer}`;
                        changeElementDisplay("romanNumeralAnswer", true);
                        changeElementDisplay("romanNumeralTestBtn", true);            
                    break;
                    // Fibonnaci
                    case 2:
                        let fibInput = document.getElementById("fibonnaciValue").value;
                        let fibAnswer = fibonnaci(parseInt(fibInput));
                        document.getElementById('fibonnaciAnswer').innerHTML = fibAnswer;
                        changeElementDisplay("fibonnaciAnswer", true);
                        changeElementDisplay("fibonnaciTestBtn", true);
                    break;
                    // Coin Change
                    case 3:
                        let coinInput = document.getElementById("changeValue").value;
                        let coinAnswer = coinChange(parseInt(coinInput));
                        document.getElementById('coinAnswer').innerHTML = coinAnswer;
                        changeElementDisplay("coinAnswer", true);
                        changeElementDisplay("coinTestBtn", true);
                    break;
                }
                changeClassDisplay("btn-primary", true);
                changeClassDisplay("btn-secondary", true);
                changeClassDisplay("loading", false);
                changeClassDisplay("resultMessages", true);
            })      
        });
    });

    next_click.forEach(function(next_click_form){
        next_click_form.addEventListener('click',function(){
            if(!validateform()){
                return false
            }
           formNumber++;
           updateform();
           progressForward();
           changeContent();
           changeClassDisplay("btn-primary", false);
           changeClassDisplay("right-side", false); 
           changeClassDisplay("testCases", false);         
        });
    }); 

    let back_click=document.querySelectorAll("#backBtn");
    back_click.forEach(function(back_click_form){
        back_click_form.addEventListener('click',function(){
           formNumber--;
           updateform();
           progressBack();
           changeContent();
           changeClassDisplay("btn-primary", true);
           changeClassDisplay("right-side", false);  
           changeClassDisplay("testCases", false);      
        });
    });

    function updateform(){
        main_form.forEach(function(mainform_number){
            mainform_number.classList.remove('active');
        })
        main_form[formNumber].classList.add('active');
        changeClassDisplay("answerSuccess", false);
        changeClassDisplay("answerFailure", false);
        var inputElements = document.getElementsByTagName('input');
        for (const element of inputElements) {
            element.value = '';
        }
    } 
    
    function progressForward(){  
        num.innerHTML = formNumber+1;
        step_list[formNumber].classList.add('active');
    }  

    function progressBack(){
        let form_num = formNumber+1;
        step_list[form_num].classList.remove('active');
        num.innerHTML = form_num;
    } 
    
    let step_num_content = document.querySelectorAll(".step-number-content");

    function changeContent(){
         step_num_content.forEach(function(content){
            content.classList.remove('active'); 
            content.classList.add('d-none');
         }); 
         step_num_content[formNumber].classList.add('active');
    }   
    
    function validateform(){
        validate=true;
        let validate_inputs=document.querySelectorAll(".main.active input");
        validate_inputs.forEach(function(vaildate_input){
            vaildate_input.classList.remove('warning');
            if(vaildate_input.hasAttribute('require')){
                if(vaildate_input.value.length==0){
                    validate=false;
                    vaildate_input.classList.add('warning');
                }
            }
        });
        return validate;

    }
    
    function changeElementDisplay(elementId, showItem) {
        element = document.getElementById(elementId);
        showItem ? element.style.display = '' : element.style.display = 'none';            
    }

    function changeClassDisplay(className, showItem)
    {
        let elements = document.getElementsByClassName(className);
        Array.from(elements).forEach((element) => {
            showItem ? element.style.display = '' : element.style.display = 'none';            
        });
    }

    function hideMessages() {
        let elements = document.getElementsByClassName("messages");
        Array.from(elements).forEach((element) => {
            element.style.display = 'none';            
        });
    }

    test_case_click.forEach(function(test_click_form){
        test_click_form.addEventListener('click',function(){
            let elements = document.getElementsByClassName("suite");
            Array.from(elements).forEach((element, index) => {
                index != formNumber ? element.style.display = 'none' : element.style.display = '';
            });
            changeClassDisplay("right-side", true);    
        });
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }

    // Function checks to see if string provided is Palindrome
    function palindrome(str) {
        const alphaNumeric = str.toString().toLowerCase().match(/['a-z0-9']/g);
        return alphaNumeric.join('') === alphaNumeric.reverse().join('');
    }

    // Function returns the Roman Numerals for a given number 
    function romanNumerals(number) {
        const romanMap = { _M: 1000000, _D: 500000, _C: 100000, _L: 50000, _X: 10000, _V: 5000, _IV: 4000, M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
        let answer = "";
        for (let key in romanMap) {
          while (number >= romanMap[key]) {
            answer += key.includes("_") ? `<span style="text-decoration: overline;">${key.replace("_", "")}</span>` : `${key}`;
            number -= romanMap[key];
          }
        }
        return answer;
    }
    
    // Returns Fibonnaci sequence for a given number
    function fibonnaci(number) {
        let arr = [0, 1];
        if (number > 500) {
            return "Limit is n = ±500";          
        }
        else if (number < 1)
        {
            return "0";
        }
        for (let i = 2; i < number + 1; i++) {
            arr.push(arr[i - 2] + arr[i - 1])
        }
        let finalOutput = "";
        let formulaOutput = "";
        let fibIndex = `F${number} =` 
        arr.slice(0, -1).map(function (element, index) { formulaOutput += `F${index}+` }).join(",");
        if (number == 1)
        {
            finalOutput += `F0 = 0\nF1 = 1\n`;
        } 
        else {
            finalOutput += `${fibIndex} ${formulaOutput.slice(0, -1)}\n`;
            finalOutput += `${fibIndex} ${arr.slice(-3).slice(0, -1).reverse().join(" + ")}\n`;
        }       
        finalOutput += `${fibIndex} ${arr[number]}\n`;
        return `${finalOutput}`
    }

    // Returns mininum number of coins for value provided
    function coinChange(value) {
        let coinsRequired = "";
        let coinsUsed = [];
        let coins = [1, 2, 5, 10, 20, 50, 100];
        while (value > 0) {
          let coin = Math.max(...coins.filter(t => value >= t));
          value -= coin;
          coinsUsed.push(coin);
        }
        if (coinsUsed.length > 0)
        {
            let map = coinsUsed.reduce((val, i) => val.set(i, (val.get(i) || 0) + 1), new Map());
            map.forEach((value, key) => {
                coinsRequired += `${value}x ${key}p\n`;
            })       
        }
        return coinsRequired;
      }

      