export function validatePhoneNumber(phone: string): boolean 
{
    const regex = /^(\+39)?\s?3\d{2}\s?\d{6,7}$/;
    return regex.test(phone);
}
  