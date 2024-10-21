export function validateCodiceFiscale(cf: string): boolean 
{
    const regex = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;
    return regex.test(cf);
}
  