import { useState } from 'react'

// svgs
import UxAngleDown from '@/assets/svg/ux/angle-down.svg'

// css
import styles from './faq.module.scss'

export default function Faq() {

	const questions = [
		{
			question: 'Quais tipos de serviços vocês oferecem?',
			answer: 'Oferecemos uma ampla gama de serviços de transporte, incluindo frete marítimo, aéreo, rodoviário entre outros. Nossa equipe especializada está pronta para atender às suas necessidades logísticas, independentemente do modo de transporte escolhido.'
		}, {
			question: 'Vocês oferecem serviços de transporte internacional?',
			answer: 'Sim, a Go2World é especializada em serviços de transporte internacional. Seja por via marítima, aérea ou rodoviária, estamos preparados para gerenciar e agendar seus fretes em escala global. Entre em contato para discutir as opções disponíveis para suas operações internacionais.'
		}, {
			question: 'Quais medidas vocês adotam para garantir a segurança das mercadorias durante o transporte?',
			answer: 'A segurança da sua carga é nossa prioridade. A Go2World implementa rigorosos padrões de segurança em todos os modos de transporte. Trabalhamos com parceiros confiáveis e utilizamos tecnologias avançadas para monitorar e proteger suas mercadorias ao longo de toda a jornada logística.'
		}, {
			question: 'Como posso verificar o status da minha carga durante o transporte?',
			answer: 'Mantemos nossos clientes informados por meio de comunicações proativas. Enviamos e-mails regulares com todos os dados fornecidos pelo armador, incluindo previsão de atracação do navio, para garantir que você esteja sempre atualizado sobre o andamento do transporte da sua carga.'
		}, {
			question: 'O que acontece caso haja algum imprevisto ou atraso com a minha carga?',
			answer: 'Imprevistos podem ocorrer. Em caso de atrasos ou problemas durante o transporte, nossa equipe dedicada está pronta para lidar com situações emergenciais. Mantemos você informado sobre quaisquer alterações no cronograma e trabalhamos para encontrar soluções rápidas e eficientes para minimizar qualquer impacto nos prazos de entrega.'
		}
	]

	return (
		<section className={styles.faq}>
			<div className='container'>

				<div className={styles.top}>

					<h3 className='subtitle'>
						Faqs
					</h3>

					<h2 className='text-bigger medium'>
						Perguntas frequentes<span className='blue'>.</span>
					</h2>

					<p>
						Explore perguntas frequentes sobre nossos serviços logísticos. Para mais informações, entre em contato conosco. Estamos aqui para simplificar sua experiência.
					</p>

				</div>

				<div className={styles.questions}>
					{questions.map((item, i) => (
						<Question
							key={i}
							question={item.question}
							answer={item.answer}
						/>
					))}
				</div>

			</div>
		</section>
	)
}

export const Question = ({ question, answer }) => {

	const [isActive, setIsActive] = useState(false)

	const toggle = () => {
		setIsActive((prev) => !prev)
	}

	return (
		<div className={styles.item + ' ' + (isActive ? styles.active : '')}>
							
			<div className={styles.question} onClick={toggle}>

				<div className='text-medium medium'>
					{question}
				</div>

				<UxAngleDown />

			</div>

			<div className={styles.answer}>
				<div>
					<p>
						{answer}
					</p>
				</div>
			</div>

		</div>
	)
}