export function validatePostalCode(postalCode: string): boolean 
{
    const regex = /^\d{5}$/;
    return regex.test(postalCode);
 }
  