export const age = (birthDate: string) => {
    const dateNow = new Date;
    const yearNow = dateNow.getFullYear();
    const monthNow = dateNow.getMonth();
    const dayNow = dateNow.getDate();


    const year:number = Number(birthDate.substr(6, 4));
    const month:number = Number(birthDate.substr(3,2));
    const day:number = Number(birthDate.substr(0,2));

    if( isNaN(year) || isNaN(month) || isNaN(day)) {
        return `Date ${day} ${month} ${year} is not valid. Please enter the date in the form "DD/MM/YYYY"`
    } else {
        let ageTemp = yearNow - year;
        if (monthNow < month || monthNow == month && dayNow < day) {
            ageTemp--;
        }
        return ageTemp < 0 ? 0 : ageTemp;
    }
}