export function validateCreditCard(cardNumber: string): boolean 
{
    const regex = /^\d{13,19}$/;
    return regex.test(cardNumber);
}
  