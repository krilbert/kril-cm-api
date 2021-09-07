export type OrderDirection = 'asc' | 'desc'
// TODO: currencies
export type Currency = 'USD' | 'GBP' | 'EUR' | 'CAD' | 'AUD' | 'NZD' | string
export type BillingCurrency = 'USD' | 'GBP' | 'EUR' | 'CAD' | 'AUD' | 'NZD'
export type ConsentToTrack = 'Yes' | 'No' | 'Unchanged'

// TODO:
export type BouncesReason =
  | 'Invalid Email Address'
  | 'Hard Bounce'
  | 'Soft Bounce - Mailbox Full'
  | 'General Bounce'
  | string
export type BounceType = 'Hard' | 'Soft'

export interface EmailAddress {
  EmailAddress: string
}

export interface Paginated<T> {
  Results: T[]
  ResultsOrderedBy: 'email' | string // TODO:
  OrderDirection: OrderDirection
  PageNumber: number
  PageSize: number
  RecordsOnThisPage: number
  TotalNumberOfRecords: number
  NumberOfPages: number
}

export interface PaginationParams {
  page?: number
  pageSize?: number
  orderdirection?: OrderDirection
}

export interface KeyValuePair {
  Key: string
  value: string
  Clear?: boolean
}

export type Timezone =
  | '(GMT) Coordinated Universal Time'
  | '(GMT+00:00) Dublin, Edinburgh, Lisbon, London'
  | '(GMT+00:00) Monrovia, Reykjavik'
  | '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna'
  | '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague'
  | '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris'
  | '(GMT+01:00) Casablanca'
  | '(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb'
  | '(GMT+01:00) West Central Africa'
  | '(GMT+02:00) Amman'
  | '(GMT+02:00) Athens, Bucharest'
  | '(GMT+02:00) Beirut'
  | '(GMT+02:00) Cairo'
  | '(GMT+02:00) Chisinau'
  | '(GMT+02:00) Damascus'
  | '(GMT+02:00) Gaza, Hebron'
  | '(GMT+02:00) Harare, Pretoria'
  | '(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius'
  | '(GMT+02:00) Jerusalem'
  | '(GMT+02:00) Kaliningrad'
  | '(GMT+02:00) Tripoli'
  | '(GMT+02:00) Windhoek'
  | '(GMT+03:00) Baghdad'
  | '(GMT+03:00) Istanbul'
  | '(GMT+03:00) Kuwait, Riyadh'
  | '(GMT+03:00) Minsk'
  | '(GMT+03:00) Moscow, St. Petersburg'
  | '(GMT+03:00) Nairobi'
  | '(GMT+03:30) Tehran'
  | '(GMT+04:00) Abu Dhabi, Muscat'
  | '(GMT+04:00) Astrakhan, Ulyanovsk'
  | '(GMT+04:00) Baku'
  | '(GMT+04:00) Izhevsk, Samara'
  | '(GMT+04:00) Port Louis'
  | '(GMT+04:00) Tbilisi'
  | '(GMT+04:00) Yerevan'
  | '(GMT+04:30) Kabul'
  | '(GMT+05:00) Ashgabat, Tashkent'
  | '(GMT+05:00) Ekaterinburg'
  | '(GMT+05:00) Islamabad, Karachi'
  | '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi'
  | '(GMT+05:30) Sri Jayawardenepura'
  | '(GMT+05:45) Kathmandu'
  | '(GMT+06:00) Astana'
  | '(GMT+06:00) Dhaka'
  | '(GMT+06:30) Yangon (Rangoon)'
  | '(GMT+07:00) Bangkok, Hanoi, Jakarta'
  | '(GMT+07:00) Barnaul, Gorno-Altaysk'
  | '(GMT+07:00) Krasnoyarsk'
  | '(GMT+07:00) Novosibirsk'
  | '(GMT+07:00) Tomsk'
  | '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi'
  | '(GMT+08:00) Irkutsk'
  | '(GMT+08:00) Kuala Lumpur, Singapore'
  | '(GMT+08:00) Perth'
  | '(GMT+08:00) Taipei'
  | '(GMT+08:00) Ulaanbaatar'
  | '(GMT+09:00) Chita'
  | '(GMT+09:00) Osaka, Sapporo, Tokyo'
  | '(GMT+09:00) Seoul'
  | '(GMT+09:00) Yakutsk'
  | '(GMT+09:30) Adelaide'
  | '(GMT+09:30) Darwin'
  | '(GMT+10:00) Brisbane'
  | '(GMT+10:00) Canberra, Melbourne, Sydney'
  | '(GMT+10:00) Guam, Port Moresby'
  | '(GMT+10:00) Hobart'
  | '(GMT+10:00) Vladivostok'
  | '(GMT+10:30) Lord Howe Island'
  | '(GMT+11:00) Bougainville Island'
  | '(GMT+11:00) Chokurdakh'
  | '(GMT+11:00) Magadan'
  | '(GMT+11:00) Solomon Is., New Caledonia'
  | '(GMT+12:00) Anadyr, Petropavlovsk-Kamchatsky'
  | '(GMT+12:00) Auckland, Wellington'
  | '(GMT+12:00) Coordinated Universal Time+12'
  | '(GMT+12:00) Fiji'
  | '(GMT+12:00) Petropavlovsk-Kamchatsky - Old'
  | "(GMT+13:00) Nuku'alofa"
  | '(GMT+13:00) Samoa'
  | '(GMT+14:00) Kiritimati Island'
  | '(GMT-01:00) Azores'
  | '(GMT-01:00) Cabo Verde Is.'
  | '(GMT-02:00) Coordinated Universal Time-02'
  | '(GMT-02:00) Mid-Atlantic - Old'
  | '(GMT-03:00) Araguaina'
  | '(GMT-03:00) Brasilia'
  | '(GMT-03:00) Cayenne, Fortaleza'
  | '(GMT-03:00) City of Buenos Aires'
  | '(GMT-03:00) Greenland'
  | '(GMT-03:00) Montevideo'
  | '(GMT-03:00) Salvador'
  | '(GMT-03:30) Newfoundland'
  | '(GMT-04:00) Asuncion'
  | '(GMT-04:00) Atlantic Time (Canada)'
  | '(GMT-04:00) Caracas'
  | '(GMT-04:00) Cuiaba'
  | '(GMT-04:00) Georgetown, La Paz, Manaus, San Juan'
  | '(GMT-04:00) Santiago'
  | '(GMT-05:00) Bogota, Lima, Quito, Rio Branco'
  | '(GMT-05:00) Chetumal'
  | '(GMT-05:00) Eastern Time (US & Canada)'
  | '(GMT-05:00) Haiti'
  | '(GMT-05:00) Indiana (East)'
  | '(GMT-05:00) Turks and Caicos'
  | '(GMT-06:00) Central America'
  | '(GMT-06:00) Central Time (US & Canada)'
  | '(GMT-06:00) Guadalajara, Mexico City, Monterrey'
  | '(GMT-06:00) Saskatchewan'
  | '(GMT-07:00) Arizona'
  | '(GMT-07:00) Chihuahua, La Paz, Mazatlan'
  | '(GMT-07:00) Mountain Time (US & Canada)'
  | '(GMT-08:00) Baja California'
  | '(GMT-08:00) Coordinated Universal Time-08'
  | '(GMT-08:00) Pacific Time (US & Canada)'
  | '(GMT-09:00) Alaska'
  | '(GMT-09:00) Coordinated Universal Time-09'
  | '(GMT-10:00) Hawaii'
  | '(GMT-11:00) Coordinated Universal Time-11'
  | '(GMT-12:00) International Date Line West'

export type Country =
  | 'Afghanistan'
  | 'Albania'
  | 'Algeria'
  | 'American Samoa'
  | 'Andorra'
  | 'Angola'
  | 'Anguilla'
  | 'Antigua & Barbuda'
  | 'Argentina'
  | 'Armenia'
  | 'Aruba'
  | 'Australia'
  | 'Austria'
  | 'Azerbaijan'
  | 'Azores'
  | 'Bahamas'
  | 'Bahrain'
  | 'Bangladesh'
  | 'Barbados'
  | 'Belarus'
  | 'Belgium'
  | 'Belize'
  | 'Benin'
  | 'Bermuda'
  | 'Bhutan'
  | 'Bolivia'
  | 'Bonaire'
  | 'Bosnia & Herzegovina'
  | 'Botswana'
  | 'Brazil'
  | 'British Indian Ocean Ter'
  | 'Brunei'
  | 'Bulgaria'
  | 'Burkina Faso'
  | 'Burundi'
  | 'Cambodia'
  | 'Cameroon'
  | 'Canada'
  | 'Canary Islands'
  | 'Cape Verde'
  | 'Cayman Islands'
  | 'Central African Republic'
  | 'Chad'
  | 'Channel Islands'
  | 'Chile'
  | 'China'
  | 'Christmas Island'
  | 'Cocos Island'
  | 'Colombia'
  | 'Comoros'
  | 'Congo'
  | 'Congo Democratic Rep'
  | 'Cook Islands'
  | 'Costa Rica'
  | "Cote D'Ivoire"
  | 'Croatia'
  | 'Cuba'
  | 'Curacao'
  | 'Cyprus'
  | 'Czech Republic'
  | 'Denmark'
  | 'Djibouti'
  | 'Dominica'
  | 'Dominican Republic'
  | 'East Timor'
  | 'Ecuador'
  | 'Egypt'
  | 'El Salvador'
  | 'Equatorial Guinea'
  | 'Eritrea'
  | 'Estonia'
  | 'Ethiopia'
  | 'Falkland Islands'
  | 'Faroe Islands'
  | 'Fiji'
  | 'Finland'
  | 'France'
  | 'French Guiana'
  | 'French Polynesia'
  | 'French Southern Ter'
  | 'Gabon'
  | 'Gambia'
  | 'Georgia'
  | 'Germany'
  | 'Ghana'
  | 'Gibraltar'
  | 'Great Britain'
  | 'Greece'
  | 'Greenland'
  | 'Grenada'
  | 'Guadeloupe'
  | 'Guam'
  | 'Guatemala'
  | 'Guernsey'
  | 'Guinea'
  | 'Guinea-Bissau'
  | 'Guyana'
  | 'Haiti'
  | 'Honduras'
  | 'Hong Kong'
  | 'Hungary'
  | 'Iceland'
  | 'India'
  | 'Indonesia'
  | 'Iran'
  | 'Iraq'
  | 'Ireland'
  | 'Isle of Man'
  | 'Israel'
  | 'Italy'
  | 'Jamaica'
  | 'Japan'
  | 'Jersey'
  | 'Jordan'
  | 'Kazakhstan'
  | 'Kenya'
  | 'Kiribati'
  | 'Korea North'
  | 'Korea South'
  | 'Kuwait'
  | 'Kyrgyzstan'
  | 'Laos'
  | 'Latvia'
  | 'Lebanon'
  | 'Lesotho'
  | 'Liberia'
  | 'Libya'
  | 'Liechtenstein'
  | 'Lithuania'
  | 'Luxembourg'
  | 'Macau'
  | 'Macedonia'
  | 'Madagascar'
  | 'Malawi'
  | 'Malaysia'
  | 'Maldives'
  | 'Mali'
  | 'Malta'
  | 'Marshall Islands'
  | 'Martinique'
  | 'Mauritania'
  | 'Mauritius'
  | 'Mayotte'
  | 'Mexico'
  | 'Midway Islands'
  | 'Moldova'
  | 'Monaco'
  | 'Mongolia'
  | 'Montenegro'
  | 'Montserrat'
  | 'Morocco'
  | 'Mozambique'
  | 'Myanmar'
  | 'Namibia'
  | 'Nauru'
  | 'Nepal'
  | 'Netherland Antilles'
  | 'Netherlands'
  | 'Nevis'
  | 'New Caledonia'
  | 'New Zealand'
  | 'Nicaragua'
  | 'Niger'
  | 'Nigeria'
  | 'Niue'
  | 'Norfolk Island'
  | 'Norway'
  | 'Oman'
  | 'Pakistan'
  | 'Palau Island'
  | 'Palestine'
  | 'Panama'
  | 'Papua New Guinea'
  | 'Paraguay'
  | 'Peru'
  | 'Philippines'
  | 'Pitcairn Island'
  | 'Poland'
  | 'Portugal'
  | 'Puerto Rico'
  | 'Qatar'
  | 'Reunion'
  | 'Romania'
  | 'Russia'
  | 'Rwanda'
  | 'Saipan'
  | 'Samoa'
  | 'Samoa American'
  | 'San Marino'
  | 'Sao Tome & Principe'
  | 'Saudi Arabia'
  | 'Senegal'
  | 'Serbia'
  | 'Serbia & Montenegro'
  | 'Seychelles'
  | 'Sierra Leone'
  | 'Singapore'
  | 'Slovakia'
  | 'Slovenia'
  | 'Solomon Islands'
  | 'Somalia'
  | 'South Africa'
  | 'South Sudan'
  | 'Spain'
  | 'Sri Lanka'
  | 'St Barthelemy'
  | 'St Eustatius'
  | 'St Helena'
  | 'St Kitts-Nevis'
  | 'St Lucia'
  | 'St Maarten'
  | 'St Pierre & Miquelon'
  | 'St Vincent & Grenadines'
  | 'Sudan'
  | 'Suriname'
  | 'Swaziland'
  | 'Sweden'
  | 'Switzerland'
  | 'Syria'
  | 'Tahiti'
  | 'Taiwan'
  | 'Tajikistan'
  | 'Tanzania'
  | 'Thailand'
  | 'Togo'
  | 'Tokelau'
  | 'Tonga'
  | 'Trinidad & Tobago'
  | 'Tunisia'
  | 'Turkey'
  | 'Turkmenistan'
  | 'Turks & Caicos Is'
  | 'Tuvalu'
  | 'Uganda'
  | 'Ukraine'
  | 'United Arab Emirates'
  | 'United Kingdom'
  | 'United States of America'
  | 'Uruguay'
  | 'Uzbekistan'
  | 'Vanuatu'
  | 'Vatican City State'
  | 'Venezuela'
  | 'Vietnam'
  | 'Virgin Islands (Brit)'
  | 'Virgin Islands (USA)'
  | 'Wake Island'
  | 'Wallis & Futana Is'
  | 'Yemen'
  | 'Zambia'
  | 'Zimbabwe'