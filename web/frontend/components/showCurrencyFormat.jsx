

export function showAmountWithCurrency(value,currency) {
    console.log(value)
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
       sdCurrencyprice = moneyFormat.replace("{{amount}}",value);
           break;
        case "amount_with_comma_separator":
        let comma_seperator = value.replace(".",",")
        sdCurrencyprice = moneyFormat.replace("{{amount_with_comma_separator}}",comma_seperator);
            break;
        case "amount_no_decimals_with_space_separator":
        let noDecimalwithSpace = parseInt(value);
        sdCurrencyprice = moneyFormat.replace("{{amount_no_decimals_with_space_separator}}",noDecimalwithSpace);
            break;
        case "amount_no_decimals":
        let noDecimal = parseInt(value);
        sdCurrencyprice = moneyFormat.replace("{{amount_no_decimals}}",noDecimal);
            break;
        case "amount_no_decimals_with_comma_separator":
        let noDecimalwithComma = parseInt(value);

          sdCurrencyprice = moneyFormat.replace("{{amount_no_decimals_with_comma_separator}}",noDecimalwithComma);
            break;
        case "amount_with_space_separator":
          let Space_comma_seperator = value.replace(".",",")
        sdCurrencyprice = moneyFormat.replace("{{amount_with_space_separator}}",Space_comma_seperator);
            break;
        default:
            // code block
    }
    console.log(sdCurrencyprice)
    return sdCurrencyprice;
}