
export const fetchHelper = async(url: string) => {

    const response = await fetch(`https://restcountries.com/v3.1/${ url }`);
    const data     = await response.json();
    return data

};
