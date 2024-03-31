document.querySelector ('.cta_form').addEventListener ('submit', handleFormSubmit);
const emailField = document.querySelector ('.cta_form_textfield');

function handleFormSubmit (e)
{
    e.preventDefault ();

    emailField.parentElement.classList.remove ('invalid');

    if (!isEmail (emailField.value))
    {
        emailField.parentElement.classList.add ('invalid');
        emailField.parentElement.querySelector ('.textfield_error').textContent = 'Must be a valid email'
    }
}



function isEmail (str)
{
    return str.match (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
}