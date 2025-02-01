
export const currencies: { [key: string]: string } = {
  USD: '$',       // US Dollar
  EUR: '€',       // Euro
  GBP: '£',       // British Pound
  INR: '₹',       // Indian Rupee
  JPY: '¥',       // Japanese Yen
  CNY: '¥',       // Chinese Yuan Renminbi
  AUD: 'A$',      // Australian Dollar
  CAD: 'C$',      // Canadian Dollar
  CHF: 'CHF',     // Swiss Franc
  SEK: 'kr',      // Swedish Krona
  NZD: 'NZ$',     // New Zealand Dollar
  ZAR: 'R',       // South African Rand
  MXN: '$',       // Mexican Peso
  SGD: 'S$',      // Singapore Dollar
  HKD: 'HK$',     // Hong Kong Dollar
  NOK: 'kr',      // Norwegian Krone
  KRW: '₩',       // South Korean Won
  TRY: '₺',       // Turkish Lira
  RUB: '₽',       // Russian Ruble
  BRL: 'R$',      // Brazilian Real
  PLN: 'zł',      // Polish Zloty
  TWD: 'NT$',     // New Taiwan Dollar
  THB: '฿',       // Thai Baht
  MYR: 'RM',      // Malaysian Ringgit
  IDR: 'Rp',      // Indonesian Rupiah
  DKK: 'kr',      // Danish Krone
  HUF: 'Ft',      // Hungarian Forint
  CZK: 'Kč',      // Czech Koruna
  ILS: '₪',       // Israeli New Shekel
  CLP: '$',       // Chilean Peso
  PHP: '₱',       // Philippine Peso
  AED: 'د.إ',     // UAE Dirham
  COP: '$',       // Colombian Peso
  SAR: '﷼',       // Saudi Riyal
  RON: 'lei',     // Romanian Leu
  VND: '₫',       // Vietnamese Dong
  PKR: '₨',       // Pakistani Rupee
  EGP: '£',       // Egyptian Pound
  NGN: '₦',       // Nigerian Naira
  BDT: '৳',       // Bangladeshi Taka
  ARS: '$',       // Argentine Peso
  KES: 'KSh',     // Kenyan Shilling
  QAR: '﷼',       // Qatari Riyal
  UAH: '₴',       // Ukrainian Hryvnia
  PEN: 'S/',      // Peruvian Sol
  LKR: '₨',       // Sri Lankan Rupee
  GHS: '₵',       // Ghanaian Cedi
  MMK: 'K',       // Burmese Kyat
  IRR: '﷼',       // Iranian Rial
  BHD: '.د.ب',    // Bahraini Dinar
  OMR: '﷼',       // Omani Rial
  IQD: 'ع.د',     // Iraqi Dinar
  MAD: 'د.م.',    // Moroccan Dirham
  LYD: 'ل.د',     // Libyan Dinar
  JOD: 'د.ا',     // Jordanian Dinar
  ALL: 'L',       // Albanian Lek
  RSD: 'din',     // Serbian Dinar
  ISK: 'kr',      // Icelandic Krona
  BGN: 'лв',      // Bulgarian Lev
  HRK: 'kn',      // Croatian Kuna
  GEL: '₾',       // Georgian Lari
  TND: 'د.ت',     // Tunisian Dinar
  AZN: '₼',       // Azerbaijani Manat
  UZS: 'soʻm',    // Uzbekistani Som
  KZT: '₸',       // Kazakhstani Tenge
  AMD: '֏',       // Armenian Dram
  BYN: 'Br',      // Belarusian Ruble
  MNT: '₮',       // Mongolian Tugrik
  LBP: 'ل.ل',     // Lebanese Pound
  SDG: 'ج.س.',    // Sudanese Pound
  SYP: '£',       // Syrian Pound
  YER: '﷼',       // Yemeni Rial
  // Add more as needed
};

let currencyCodes = [];
for(const key of Object.keys(currencies)){
currencyCodes.push(key);
}
export {currencyCodes}
