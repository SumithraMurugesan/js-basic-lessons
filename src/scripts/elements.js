import { currencies } from "./currency";
    const primaryCurrency = document.getElementById("primary");
    const secondaryCurrency = document.getElementById("secondary");
    primaryCurrency.innerHTML = getOptions(currencies);
    secondaryCurrency.innerHTML = getOptions(currencies);

    function getOptions(data) {
          return Object.entries(data)
            .map(
              ([country, currency]) =>
                `<option value="${country}">${country == 'MSG' ? " " : country}  ${currency}</option>`
            )
            .join("");
        }
        export {primaryCurrency,secondaryCurrency,getOptions};