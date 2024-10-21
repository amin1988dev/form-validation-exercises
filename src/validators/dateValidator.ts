export function validateDate(date: string): boolean 
{
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(date);
}
  