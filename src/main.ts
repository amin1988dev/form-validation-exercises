import { validateCodiceFiscale } from './validators/codiceFiscaleValidator';
import { validateEmail } from './validators/emailValidator';
import { validatePassword } from './validators/passwordValidator';
import { validatePhoneNumber } from './validators/phoneValidator';
import { validateDate } from './validators/dateValidator';
import { isAdult } from './validators/ageValidator';
import { validatePostalCode } from './validators/postalCodeValidator';
import { validateIBAN } from './validators/ibanValidator';
import { validateCreditCard } from './validators/creditCardValidator';
import { validateVATNumber } from './validators/vatNumberValidator';
import { validateUsername } from './validators/usernameValidator';
import { validateIPAddress } from './validators/ipAddressValidator';
import { validateURL } from './validators/urlValidator';
import { validateLicensePlate } from './validators/licensePlateValidator';
import { validateCheckbox } from './validators/checkboxValidator';
import { validateTextField } from './validators/textFieldValidator';

window.addEventListener('load', () => {
  const form = document.getElementById('validationForm') as HTMLFormElement;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formIsValid = true;

    /* Validazione Codice Fiscale */
    const codiceFiscaleInput = document.getElementById('codiceFiscale') as HTMLInputElement;
    const codiceFiscaleError = document.getElementById('codiceFiscaleError') as HTMLElement;
    if (!validateCodiceFiscale(codiceFiscaleInput.value)) {
      codiceFiscaleError.textContent = 'Codice Fiscale non valido.';
      formIsValid = false;
    } else {
      codiceFiscaleError.textContent = '';
    }

    /* Validazione Email */
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const emailError = document.getElementById('emailError') as HTMLElement;
    if (!validateEmail(emailInput.value)) {
      emailError.textContent = 'Email non valida.';
      formIsValid = false;
    } else {
      emailError.textContent = '';
    }

    // Validazione Password
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const passwordError = document.getElementById('passwordError') as HTMLElement;
    if (!validatePassword(passwordInput.value)) {
      passwordError.innerHTML = `
        <strong>Errore:</strong> La password non è valida.<br>
        La password deve contenere:
        <ul>
          <li>Almeno 8 caratteri</li>
          <li>Almeno una lettera maiuscola</li>
          <li>Almeno una lettera minuscola</li>
          <li>Almeno un numero</li>
          <li>Almeno un carattere speciale (es. !@#$%^&*)</li>
        </ul>
      `;
      passwordError.style.display = 'block';
      formIsValid = false;
    } else {
      passwordError.textContent = '';
      passwordError.style.display = 'none';
    }

    /* Validazione Numero di Telefono */
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const phoneError = document.getElementById('phoneError') as HTMLElement;
    if (!validatePhoneNumber(phoneInput.value)) {
      
      phoneError.innerHTML = `
      <strong>Errore:</strong> Numero di telefono non valido.<br>
      `;
      phoneError.style.display = 'block';
      formIsValid = false;
    } else {
      phoneError.textContent = '';
      phoneError.style.display = 'none';
    }
    
    const dateInput = document.getElementById('birthDate') as HTMLInputElement;
    const dateError = document.getElementById('birthDateError') as HTMLElement;
    if (!validateDate(dateInput.value)) {  // Validazione Data di Nascita
      dateError.innerHTML = `
      <strong>Errore:</strong> Formato della data non valido.<br>`;
      dateError.style.display = 'block';
      formIsValid = false;
    } else if (!isAdult(dateInput.value)) {  // Controllo se la persona è maggiorenne
      dateError.innerHTML = `
      <strong>Errore:</strong> Devi avere almeno 18 anni.<br>`;
      dateError.style.display = 'block';
      formIsValid = false;
    } else {
      dateError.innerHTML = '';
    }

    /* Validazione Codice Postale */
    const postalCodeInput = document.getElementById('postalCode') as HTMLInputElement;
    const postalCodeError = document.getElementById('postalCodeError') as HTMLElement;
    if (!validatePostalCode(postalCodeInput.value)) {
      postalCodeError.innerHTML = `
      <strong>Errore:</strong> Codice postale non valido.<br>`;
      postalCodeError.style.display = 'block';
      formIsValid = false;
    } else {
      postalCodeError.innerHTML = '';
    }

    /* Validazione IBAN */
    const ibanInput = document.getElementById('iban') as HTMLInputElement;
    const ibanError = document.getElementById('ibanError') as HTMLElement;
    if (!validateIBAN(ibanInput.value)) {
      ibanError.innerHTML = `IBAN non valido.`;
      ibanError.style.display = 'block';
      formIsValid = false;
    } else {
      ibanError.innerHTML = '';
    }

    /* Validazione Carta di Credito */
    const creditCardInput = document.getElementById('creditCard') as HTMLInputElement;
    const creditCardError = document.getElementById('creditCardError') as HTMLElement;
    if (!validateCreditCard(creditCardInput.value)) {
      creditCardError.textContent = 'Carta di credito non valida.';
      formIsValid = false;
    } else {
      creditCardError.textContent = '';
    }

    /* Validazione Partita IVA */
    const vatNumberInput = document.getElementById('vatNumber') as HTMLInputElement;
    const vatNumberError = document.getElementById('vatNumberError') as HTMLElement;
    if (!validateVATNumber(vatNumberInput.value)) {
      vatNumberError.textContent = 'Partita IVA non valida.';
      formIsValid = false;
    } else {
      vatNumberError.textContent = '';
    }

    /* Validazione Nome Utente */
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const usernameError = document.getElementById('usernameError') as HTMLElement;
    if (!validateUsername(usernameInput.value)) {
      usernameError.textContent = 'Nome utente non valido.';
      formIsValid = false;
    } else {
      usernameError.textContent = '';
    }

    /* Validazione Indirizzo IP */
    const ipAddressInput = document.getElementById('ipAddress') as HTMLInputElement;
    const ipAddressError = document.getElementById('ipAddressError') as HTMLElement;
    if (!validateIPAddress(ipAddressInput.value)) {
      ipAddressError.textContent = 'Indirizzo IP non valido.';
      formIsValid = false;
    } else {
      ipAddressError.textContent = '';
    }

    /* Validazione URL */
    const urlInput = document.getElementById('url') as HTMLInputElement;
    const urlError = document.getElementById('urlError') as HTMLElement;
    if (!validateURL(urlInput.value)) {
      urlError.innerHTML = `URL non valido.`;
      urlError.style.display = 'block';
      formIsValid = false;
    } else {
      urlError.innerHTML = '';
    }

    
    /* Validazione Numero di Targa */
    const licensePlateInput = document.getElementById('licensePlate') as HTMLInputElement;
    const licensePlateError = document.getElementById('licensePlateError') as HTMLElement;
    if (!validateLicensePlate(licensePlateInput.value)) {
      licensePlateError.innerHTML = 'Numero di targa non valido.';
      licensePlateError.style.display = 'block';
      formIsValid = false;
    } else {
      licensePlateError.textContent = '';
    }

    /* Validazione Checkbox */
    const checkboxInput = document.getElementById('terms') as HTMLInputElement;
    const checkboxError = document.getElementById('termsError') as HTMLElement;
    if (!validateCheckbox(checkboxInput)) {
      checkboxError.innerHTML = 'Devi accettare i termini.';
      checkboxError.style.display = 'block';
      formIsValid = false;
    } else {
      checkboxError.textContent = '';
    }

    /* Validazione Campo Testuale */
    const textFieldInput = document.getElementById('description') as HTMLTextAreaElement;
    const textFieldError = document.getElementById('descriptionError') as HTMLElement;
    if (!validateTextField(textFieldInput.value)) {
      textFieldError.textContent = 'Il campo descrizione non può essere vuoto.';
      formIsValid = false;
    } else {
      textFieldError.textContent = '';
    }

    if (formIsValid) {
      alert('Form inviato con successo!');
      form.reset();
    }
  });
});
