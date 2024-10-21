export function validateVATNumber(vat: string): boolean 
{
    const regex = /^\d{11}$/;
    return regex.test(vat);
}
  