export function validateIBAN(iban: string): boolean 
{
    const regex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/i;
    return regex.test(iban);
}
  
/*
Esempio di IBAN validi:
    IT60X0542811101000000123456: Questo è un esempio di IBAN italiano valido.

    IT => Codice paese
    60 => Codice di controllo
    X0542811101000000123456 => Dati bancari
 ____________________________________________________________________________
 Esempio di IBAN non valido:
    IT60A0542811101000000123456: Non valido perché contiene una A nel codice di controllo che dovrebbe essere numerico (60).

    ZZ89370400440532013000: Non valido perché ZZ non è un codice paese riconosciuto.

*/