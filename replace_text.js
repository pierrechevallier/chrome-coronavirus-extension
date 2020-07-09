const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i=0; i < text.length; i++) {
	if (text[i].innerHTML.toLowerCase().includes('covid19')) {
		text[i].innerHTML = text[i].innerHTML.replace('covid19', 'connard de virus').replace('Covid19', 'connard de virus')
	} else if (text[i].innerHTML.toLowerCase().includes('covid-19')) {
		text[i].innerHTML = text[i].innerHTML.replace('covid-19', 'connard de virus').replace('COVID-19', 'connard de virus')
	} else if (text[i].innerHTML.toLowerCase().includes('covid')) {
		text[i].innerHTML = text[i].innerHTML.replace('covid', 'connard de virus').replace('Covid', 'connard de virus')
	} else if (text[i].innerHTML.toLowerCase().includes('coronavirus')) {
		text[i].innerHTML = text[i].innerHTML.replace('coronavirus', 'connard de virus').replace('Coronavirus', 'connard de virus')
	}
}