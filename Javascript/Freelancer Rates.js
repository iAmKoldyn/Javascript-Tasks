 export function dayRate(ratePerHour) {
    return ratePerHour * 8
    }

    export function daysInBudget(budget, ratePerHour) {
      return Math.floor(budget / (ratePerHour * 8))
    }

    export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
        let daysWithDiscount = (Math.floor(numDays / 22)) * 22;
        let fullPriceDays = numDays % 22;
        let fullPrice = (daysWithDiscount + fullPriceDays) * dayRate(ratePerHour);
        let discountValue = (daysWithDiscount * dayRate(ratePerHour)) * discount;
        if(discount === 0){
            return fullPrice;
        }
        return Math.ceil(fullPrice - discountValue);
    }