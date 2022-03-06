export const apikey = '11GtwHX3IWSCT31zG6wfupdLM4fyHjFi';
const baseUrl = 'https://dataservice.accuweather.com';

export const endpoints = {
  autocomplete:(text)=>`${baseUrl}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${text}`,
  fiveDays:(locationKey)=>`${baseUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${apikey}&details=false&metric=false`,
  current:(locationKey)=>`${baseUrl}/currentconditions/v1/${locationKey}?apikey=${apikey}&details=false`,
}
