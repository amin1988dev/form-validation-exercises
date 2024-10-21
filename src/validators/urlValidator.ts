export function validateURL(url: string): boolean 
{
    const regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/;
    return regex.test(url);
}

/*
    L'URL può iniziare con http:// o https:// (facoltativo).
    Deve contenere un dominio valido, che può includere sottodomini (es. www.google.com, provasito.co.uk).
    Può avere un percorso opzionale che inizia con / (es. /about, /products/123).
    Può terminare con o senza uno slash /.
*/