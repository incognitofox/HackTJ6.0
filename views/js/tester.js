var arr = [ 'CALGARY, ALBERTA #543',
  '11588 SARCEE TRAIL NW',
  'MEMBER #111814132474',
  'CALGARY, AB',
  '524129 ANN',
  '.99 G',
  '5.8',
  '2.40',
  '339710 NPL W/DEAL',
  'DEPOSIT',
  'ENVIRO FEE N',
  '.24',
  'TOTAL NUMBER OF ITEMS-SOLD-4',
  '992013 BANDAID VARI',
  '128727 ECOS LNDRY',
  '352110 WILD CHIPS',
  '458287 CHICAGO MIX',
  '15.99 G',
  '14.89 G',
  '6.29 G',
  '6.89 G',
  'SUBTOTAL',
  '85.56',
  'xxxx GST 5%',
  '3.85',
  'TOTA',
  'EFT/Debit',
  'VF',
  '89.4',
  '****2742 ACCT: CHEQUING',
  'REFERENCE: 66089938-00100 9140',
  'AUTH#: 850688',
  'Invoice# : 14012',
  '06/13 14 11:28:2',
  'COSTCO WHOLESALE #543',
  '11588 SARCEE TRAIL NW',
  'CALGARY, AB T3R 0A',
  'PURCHASE EFT/Debit',
  '00 APPROVED THANK YOU 001',
  'AMOUNT: $89.41',
  '0543 002 00000001 10 0055',
  '' ];
var shortarr = arr.filter(filhelp);
function filhelp(el)
{
  return el.includes(".");
}
console.log(arr);
console.log("\n\n\n");
console.log(shortarr);
