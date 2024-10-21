import { validateDate } from './dateValidator';

export function isAdult(date: string): boolean {

    if (!validateDate(date)) {
        return false;
    }
    const [day, month, year] = date.split('/').map(Number);  // Estrai giorno, mese e anno
    const birthDate = new Date(year, month - 1, day);  // Crea un oggetto Date
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
   
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;  // Se non ha ancora compiuto gli anni, tolgo -1
    }

    return age >= 18;
}
