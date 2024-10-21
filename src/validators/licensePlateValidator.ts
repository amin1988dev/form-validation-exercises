export function validateLicensePlate(plate: string): boolean 
{
    const regex = /^[A-Z]{2}\d{3}[A-Z]{2}$/i;
    return regex.test(plate);
}
  