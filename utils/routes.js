const phoneFlavia = '+55 (41) 99525-8096'
const phoneLuis = '+55 (41) 99206-7373'

const routes = {

	// pages
	home: '/',
	about: '/sobre',
	services: '/servicos',
	//service: (id) => `/servicos/${id}`,
	serviceAerialFreight: '/servicos/frete-aereo',
	serviceSeaFreight: '/servicos/frete-maritimo',
	serviceRoadFreight: '/servicos/frete-rodoviario',
	serviceProjectLoad: '/servicos/carga-projeto',
	serviceDoorToDoor: '/servicos/door-to-door',
	servicesLogistics: '/servicos/servicos-logisticos',
	quote: '/cotacao',
	contact: '/contato',

	// social
	instagram: 'https://www.instagram.com/go2worldlogistics',

	// contact
	phoneFlavia: phoneFlavia,
	whatsappFlavia: 'https://wa.me/' + phoneFlavia.replace(/[^0-9]/g, ''),
	emailFlavia : 'fbarros@go2world.com.br',

	phoneLuis: phoneLuis,
	whatsappLuis: 'https://wa.me/' + phoneLuis.replace(/[^0-9]/g, ''),
	emailLuis: 'lgomes@go2world.com.br',

	addressCuritiba: 'Av. Anita Garibaldi, 850, sl. 212',
	addressCuritibaLink: 'https://maps.app.goo.gl/JXVXnFhkzWUqTYoG6',
	phoneCuritiba: '+55 (41) 3528-5083',
	addressSaoPaulo: 'Av. das Nações Unidas, 14401, sl. 3103',
	addressSaoPauloLink: 'https://maps.app.goo.gl/4ekaR6wsXLCUQPPPA',
	phoneSaoPaulo: '+55 (11) 5181-7077',

	// external
	senz: 'https://senzdsn.com/',

}
  
export default routes