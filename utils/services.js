// import necessary svgs
import ServicesPackage from '@/assets/svg/services/package.svg'
import ServicesPlane from '@/assets/svg/services/plane.svg'
import ServicesPlaneAndTruck from '@/assets/svg/services/plane-and-truck.svg'
import ServicesShip from '@/assets/svg/services/ship.svg'
import ServicesTreadmill from '@/assets/svg/services/treadmill.svg'
import ServicesTruck from '@/assets/svg/services/truck.svg'

export async function getPostIdList() {
	return [{
		params: {
			id: 'frete-aereo'
		}
	}, {
		params: {
			id: 'frete-maritimo'
		}
	}, {
		params: {
			id: 'frete-rodoviario'
		}
	}, {
		params: {
			id: 'carga-projeto'
		}
	}, {
		params: {
			id: 'door-to-door'
		}
	}, {
		params: {
			id: 'servicos-logisticos'
		}
	}]
}

export const getAllServices = () => {
	return {
		'frete-aereo': {
			title: 'Frete Aéreo',
			smallDesc: 'Otimize prazos e alcance destinos globais com nosso frete aéreo.',
			icon: <ServicesPlane />
		},
		'frete-maritimo': {
			title: 'Frete Marítimo',
			smallDesc: 'Maximize sua eficiência logística com nosso frete marítimo especializado.'
		},
		'frete-rodoviario': {
			title: 'Frete Rodoviário',
			smallDesc: 'Conquiste rotas eficazes e entregas pontuais com nosso Frete Rodoviário.'
		},
		'carga-projeto': {
			title: 'Carga Projeto',
			smallDesc: 'Gerenciamos sua Carga Projeto com precisão e expertise  personalizadas.'
		},
		'door-to-door': {
			title: 'Door to Door',
			smallDesc: 'Simplificamos o processo de ponta a ponta com nosso serviço Door to Door.'
		},
		'servicos-logisticos': {
			title: 'Serviços Logísticos',
			smallDesc: 'Integre eficiência aos seus processos com nossos Serviços Logísticos.'
		}
	}
}

export const getIconComponent = (id) => {
    switch (id) {
        case 'frete-aereo':
            return <ServicesPlane />
        case 'frete-maritimo':
            return <ServicesShip />
        case 'frete-rodoviario':
            return <ServicesTruck />
		case 'carga-projeto':
            return <ServicesTreadmill />
		case 'door-to-door':
			return <ServicesPackage />
		case 'servicos-logisticos':
			return <ServicesPlaneAndTruck />
        default:
            return null
    }
}

export async function getPostDetails(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const details = getAllServices()[id]
            resolve(details)
        }, 100)
    })
}