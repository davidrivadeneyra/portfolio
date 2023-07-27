import Logo from './components/logo'
import Divider from './components/divider'
import Header from './components/header'
import Footer from './components/footer'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<Header></Header>
			<div className='container'>
				<main className='hero-blue'>
					<p className='p-large text-blue-700'>
						Mi nombre es David🖖, soy{' '}
						<span className='b-large text-blue-800'>
							Product Designer
						</span>{' '}
						y{' '}
						<Link
							href='https://ed.team/cursos/figma-componentes'
							target='_blank'
							className='link-large text-blue-800 hover:text-purple-500'>
							profesor
						</Link>
						. Por más de 4 años he estado creando productos que
						conecten con los usuarios y ayuden a las empresas a
						alcanzar sus objetivos🎯. Me encanta la colaboración en
						equipo, las interfaces hermosas✨ y las buenas
						prácticas. *
					</p>
				</main>

				<section className='section-block mb-0 pb-16 desktop:pb-12'>
					<h2 className='heading-base text-yellow-500 desktop:mb-0'>
						Proyectos destacados 📌
					</h2>
				</section>

				<section className='section-block'>
					<Link
						href='/plan-empresas'
						className='transition ease-in-out duration-300 mb-24 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] cursor-pointer'>
						<div className=''>
							<h4 className='heading-small text-gray-600'>
								Diseño de producto 👈
							</h4>

							<h3 className='heading-big mb-3'>
								Un producto para empresas, diseñado para
								personas
							</h3>
							<p className='p-base mb-4'>
								Ayudé a crear un impacto de cara a clientes
								empresariales (B2B).
							</p>
							<span className='before:block before:absolute before:-inset-0 tablet:group-hover:before:bg-blue-300 relative inline-block transition ease-in-out duration-300'>
								<button className='relative link-button-base link-color-blue group-active:text-blue-500/70'>
									Ve al caso estudio
								</button>
							</span>
						</div>
						<img src='/assets/img/pg.png' alt='' />
					</Link>
					<div
						href=''
						className='transition ease-in-out duration-300 mb-24 tablet:mb-6 group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] cursor-not-allowed'>
						<div>
							<h4 className='heading-small text-gray-600'>
								Experiencia de usuario 👈
							</h4>
							<h3 className='heading-big  mb-3'>
								Una mejor experiencia, para ganar más clientes
							</h3>
							<p className='p-base mb-4'>
								Mejoré el flujo de cierre de venta y así
								disminuir la cantidad de los carritor
								abandonados.
							</p>
							<span className='before:block before:absolute before:-inset-0 tablet:group-hover:before:bg-purple-300 relative inline-block transition ease-in-out duration-300'>
								<button className='relative link-button-base link-color-purple group-active:text-purple-500/70 cursor-not-allowed'>
									Pronto disponible
								</button>
							</span>
						</div>
						<img src='/assets/img/ed-carrito-timy.png' alt='' />
					</div>

					<div
						href=''
						className='transition ease-in-out duration-300  group flex flex-col-reverse gap-10 tablet:gap-12 tablet:grid tablet:grid-cols-2 tablet:items-center tablet:p-16 tablet:-mx-16 rounded-[2rem] tablet:border-2 tablet:border-gray-100 tablet:hover:bg-gray-900/[1.5%] tablet:hover:border-gray-900/[5%] cursor-not-allowed'>
						<div>
							<h4 className='heading-small text-gray-600'>
								Design system 👈
							</h4>
							<h3 className='heading-big  mb-3'>
								Un sistema de diseño mejorar impulsar la
								velocidad
							</h3>
							<p className='p-base mb-4'>
								Senté las basese del sistema de diseño de
								RecursosDev.
							</p>
							<span className='before:block before:absolute before:-inset-0 tablet:group-hover:before:bg-green-300 relative inline-block transition ease-in-out duration-300'>
								<button className='relative link-button-base link-color-green group-active:text-green-500/70 '>
									Pronto disponible
								</button>
							</span>
						</div>
						<img src='/assets/img/recursosdev-tiny.png' alt='' />
					</div>
				</section>
			</div>
			<Divider className='divider-red'></Divider>
			<Footer></Footer>
		</>
	)
}
