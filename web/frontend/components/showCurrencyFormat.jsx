

export function showAmountWithCurrency(value,currency) {

    let stringValue = value.toString()
    let moneyFormat = currency;
    let sdCurrencyFormatcondition;
    if (moneyFormat.includes("{{amount_no_decimals}}")) {
        sdCurrencyFormatcondition = "amount_no_decimals";
    } else if (moneyFormat.includes("{{amount_with_comma_separator}}")) {
        sdCurrencyFormatcondition = "amount_with_comma_separator";
    } else if (moneyFormat.includes("{{amount_no_decimals_with_space_separator}}")) {
        sdCurrencyFormatcondition = "amount_no_decimals_with_space_separator";
    } else if (moneyFormat.includes("{{amount_no_decimals_with_comma_separator}}")) {
        sdCurrencyFormatcondition = "amount_no_decimals_with_comma_separator";
    }else if(moneyFormat.includes("{{amount_with_space_separator}}$")){
        sdCurrencyFormatcondition = "amount_with_space_separator";
    } else {
        sdCurrencyFormatcondition = "amount";
    }

   let sdCurrencyprice ;
    switch (sdCurrencyFormatcondition) {
        case "amount":
       sdCurrencyprice = moneyFormat.replace("{{amount}}",stringValue);
           break;
        case "amount_with_comma_separator":
            if(stringValue.indexOf('.') > 0){
                let comma_seperator = stringValue.replace(".",",")
                sdCurrencyprice = moneyFormat.replace("{{amount_with_comma_separator}}",comma_seperator);
            }else{
                sdCurrencyprice = moneyFormat.replace("{{amount_with_comma_separator}}",stringValue);
            }
            break;
        case "amount_no_decimals_with_space_separator":
        let noDecimalwithSpace = parseInt(stringValue);
        sdCurrencyprice = moneyFormat.replace("{{amount_no_decimals_with_space_separator}}",noDecimalwithSpace);
            break;
        case "amount_no_decimals":
        let noDecimal = parseInt(stringValue);
        sdCurrencyprice = moneyFormat.replace("{{amount_no_decimals}}",noDecimal);
            break;
        case "amount_no_decimals_with_comma_separator":
        let noDecimalwithComma = parseInt(stringValue);

          sdCurrencyprice = moneyFormat.replace("{{amount_no_decimals_with_comma_separator}}",noDecimalwithComma);
            break;
        case "amount_with_space_separator":
            if(stringValue.indexOf('.') > 0){
          let Space_comma_seperator = stringValue.replace(".",",")
        sdCurrencyprice = moneyFormat.replace("{{amount_with_space_separator}}",Space_comma_seperator);
            }else{
        sdCurrencyprice = moneyFormat.replace("{{amount_with_space_separator}}",stringValue);

            }
            break;
        default:
            // code block
    }
    console.log(sdCurrencyprice)
    return sdCurrencyprice;
}