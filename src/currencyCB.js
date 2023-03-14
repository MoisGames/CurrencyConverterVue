const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

const response = await fetch(url, {
    headers: {
        'Accept': 'application/json',
    },
});

const text = await response.text();

console.log(text);