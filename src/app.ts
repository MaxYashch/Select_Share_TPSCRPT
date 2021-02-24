

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyAmruSjq6WCXXDA6AHnn_Nhlbmcb9WXamU';

form.addEventListener('submit', searchAddressHanler);

function searchAddressHanler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    fetch('');
}