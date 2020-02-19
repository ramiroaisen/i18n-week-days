# i18n days of the week


### Install
```sh
npm i i18n-week-days
```


### Use
```js
import weekDays from "i18n-week-days"
// or const weekDays = require("i18n-week-days")

//weekDays[isoCode][dayIndex]
weekDays["en"][0] === "Monday";
weekDays["es"][1] === "Martes"
weekDays["fr"][2] === "mercredi"
//...

// day arrays starts from Monday

// get available langs
Object.keys(weekDays);
```

### Available languages
```code
ar, Arabic, اللغة العربية
az, Azerbaijani, azərbaycan dili
be, Belarusian, беларуская мова
bg, Bulgarian, български език
bs, Bosnian, bosanski jezik
ca, Catalan, català
cs, Czech, čeština
da, Danish, dansk
de, German, Deutsch
el, Greek, Ελληνικά
en, English, English
es, Spanish, Español
et, Estonian, eesti
fa, Persian, فارسی
fi, Finnish, suomi
fr, French, Français
he, Hebrew, עברית
hr, Croatian, hrvatski jezik
hu, Hungarian, magyar
hy, Armenian, Հայերեն
id, Indonesian, Indonesian
it, Italian, Italiano
ja, Japanese, 日本語
ka, Georgian, ქართული
kk, Kazakh, қазақ тілі
ko, Korean, 한국어
lt, Lithuanian, lietuvių kalba
lv, Latvian, latviešu valoda
mk, Macedonian, македонски јазик
mn, Mongolian, Монгол хэл
nb, Norwegian Bokmål, Norsk bokmål
nl, Dutch, Nederlands
nn, Norwegian Nynorsk, Norsk nynorsk
pl, Polish, język polski
pt, Portuguese, Português
ro, Romanian, Română
ru, Russian, Русский
sk, Slovak, slovenčina
sl, Slovene, slovenski jezik
sr, Serbian, српски језик
sv, Swedish, svenska
th, Thai, ไทย
tr, Turkish, Türkçe
uk, Ukrainian, Українська
ur, Urdu, اردو
uz, Uzbek, Ўзбек
vi, Vietnamese, Tiếng Việt
zh, Chinese, 中文
```

### Data
See the index.json file

### Notes
this is a simple data module in JSON format

download the JSON file to use it in other platform/language


