a.Get all the countries from Asia continent /region using Filter method

const countries = [
{ name: ‘Nigeria’, continent: ‘Africa’},
{ name: ‘China’, continent: ‘Asia’},
{ name: ‘India’, continent: ‘Asia’},
{ name: ‘Nepal’, continent: ‘Asia’},
{ name: ‘Angola’, continent: ‘Africa’},
{ name: ‘Greece’, continent: ‘Europe’},
{ name: ‘Kenya’, continent: ‘Africa’},
{ name: ‘Greece’, continent: ‘Europe’}
]

let asianCountries = countries.filter(country => {
return country.continent === ‘Asia’;
})

console.log(asianCountries);

b.Get all the countries with a population of less than 2 lakhs using Filter method

const countries2 = [
{ name: ‘Nigeria’, continent: ‘Africa’, population:100123},
{ name: ‘India’, continent: ‘Asia’, population:240123},
{ name: ‘Nepal’, continent: ‘Asia’, population:100123},
{ name: ‘Angola’, continent: ‘Africa’, population:100123},
{ name: ‘China’, continent: ‘Asia’, population:270123},
{ name: ‘Greece’, continent: ‘Europe’, population:100123},
{ name: ‘Kenya’, continent: ‘Africa’, population:100123},
{ name: ‘London’, continent: ‘Europe’, population:55123}
]

let asianCountries2 = countries2.filter(country =>
country.population < 200000);

console.log(asianCountries2);

c.Print the following details name, capital, flag, using forEach method

const countries3 = [
{ name: ‘Nigeria’, capital: ‘Abuja’},
{ name: ‘China’, capital: ‘Beijing’},
{ name: ‘India’, capital: ‘Delhi’},
{ name: ‘Nepal’, capital: ‘Kathmandu’},
{ name: ‘Angola’, capital: ‘Luanda’},
{ name: ‘Greece’, capital: ‘Athens’},
{ name: ‘Pakistan’, capital: ‘Islamabad’},
{ name: ‘UK’, capital: ‘London’}
]

let asianCountries3 = countries3.forEach(country => {
console.log(country);
return country;
});

console.log(asianCountries3);

d.Print the total population of countries using the reduce method

const countries4 = [
{ name: ‘Nigeria’, continent: ‘Africa’, population:100123},
{ name: ‘China’, continent: ‘Asia’, population:270123},
{ name: ‘India’, continent: ‘Asia’, population:240123},
{ name: ‘Nepal’, continent: ‘Asia’, population:100123},
{ name: ‘Angola’, continent: ‘Africa’, population:100123},
{ name: ‘Greece’, continent: ‘Europe’, population:100123},
{ name: ‘Kenya’, continent: ‘Africa’, population:100123},
{ name: ‘London’, continent: ‘Europe’, population:55123}
]

let asianCountries4 = countries4.reduce((acc, current) =>{
return acc + current.population;
} ,0);

console.log(asianCountries4);

e.Print the country that uses US dollars as currency.

  const countries5 = [
{ name: ‘Nigeria’,currency:’Naira’},
{ name: ‘china’, currency:’Yuan’},
{ name: ‘India’, currency:’Rs’},
{ name: ‘Nepal’, currency:’Nepalese’},
{ name: ‘Angola’, currency:’Kwanza’},
{ name: ‘Greece’, currency:’GRD’},
{ name: ‘Kenya’, currency:’Kenyan’},
{ name: ‘London’, currency:’Pound’},
{ name: ‘America(U.S)’, currency:’Dollar’}
]

let asianCountries5 = (country) => {
return countries5.filter(x => x.indexOf(country) > -1);
}

console.log(asianCountries5(‘amer’));

