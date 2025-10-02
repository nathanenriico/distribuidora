function calculateDeliveryPrice(distance) {
    if (distance <= 2) {
        return "R$ 3,00";
    } else if (distance <= 5) {
        return "R$ 5,00";
    } else {
        return "R$ 7,00";
    }
}

function getDeliveryOptions() {
    return {
        regional: {
            name: "Entrega Regional",
            time: "1-2 dias úteis",
            price: "R$ 15,00",
            selected: true
        }
    };
}

function selectDeliveryOption(optionId) {
    const options = getDeliveryOptions();
    Object.keys(options).forEach(key => {
        options[key].selected = (key === optionId);
    });
    return options;
}