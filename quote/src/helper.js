//Year difference
export function getYearDifference(year){
    return new Date().getFullYear() - parseFloat(year);
}

//Cost from year
export function getYearCost(result, difference){
    return result - ((difference * 3) * result) / 100;
}

//total according to brand
export function getBrandIncrement(brand){
    let increment;
    switch(brand){
        case('european'):
            increment = 1.30;
            break;
        case('american'):
            increment = 1.15;
            break;
        case('asian'):
            increment = 1.05;
            break;
        default:
            break;
    }
    return increment;
}

export function getPlanIncrement(plan){
    let increment;
    switch(plan){
        case('basic'):
            increment = 1.20;
            break;
        case('full'):
            increment = 1.50;
            break;
        default:
            break;
    }
    return increment;
}

export function getIncrementTotal(result, increment){
    return parseFloat((result * increment).toFixed(2));
}