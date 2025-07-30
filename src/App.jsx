import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css'

function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);

  const handleEnviar = (e) => {
    e.preventDefault();

    const numero = '5519989054471';
    const texto = `Olá! Me chamo ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
    const mensagemCodificada = encodeURIComponent(texto);

    const link = `https://wa.me/${numero}?text=${mensagemCodificada}`;
    window.open(link, '_blank');
  };

  return (
    <>
      <header className='fixed top-0 left-0 w-full h-12 flex items-center justify-between px-4 text-[#F15A24] z-50 bg-black'>
        <h1 className="text-2xl font-bold font-paytone-one">
          <span className="text-[#F15A24]">Gab</span>
          <span className="text-white">riel</span>
        </h1>
        <ul className={`hidden md:flex gap-6 text-lg text-[#F15A24] mx-auto`}>
          <li><a href='#inicio'>Inicio</a></li>
          <li><a href='#sobre'>Sobre</a></li>
          <li><a href='#habilidades'>Habilidades</a></li>
          <li><a href='#projetos'>Projetos</a></li>
          <li><a href='#contato'>Contato</a></li>
        </ul>
        <div className="hidden md:flex gap-2">
          <a
            href="https://www.linkedin.com/in/gabriel-grandolpho/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-[#F15A24] p-2 rounded hover:shadow-[0_0_40px_#F15A24] transition"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/Gabggrand"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-[#F15A24] p-2 rounded hover:shadow-[0_0_40px_#F15A24] transition"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setMenuAberto(!menuAberto)}>≡</div>
        {menuAberto && (
          <ul className='absolute top-12 left-0 w-full flex flex-col items-center gap-4 bg-black text-white py-4 md:hidden'>
            <li><a href='#inicio' onClick={() => setMenuAberto(false)}>Inicio</a></li>
            <li><a href='#sobre' onClick={() => setMenuAberto(false)}>Sobre</a></li>
            <li><a href='#habilidades' onClick={() => setMenuAberto(false)}>Habilidades</a></li>
            <li><a href='#projetos' onClick={() => setMenuAberto(false)}>Projetos</a></li>
            <li><a href='#contato' onClick={() => setMenuAberto(false)}>Contato</a></li>
            <li><a href='https://www.linkedin.com/in/gabriel-grandolpho/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
            <li><a href='https://github.com/Gabggrand' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          </ul>
        )}
      </header>
      <div className="shadow-bg shadow1"></div>
      <div className="shadow-bg shadow2"></div>
      <main className='mt-12'>
        <section id="inicio" className="flex flex-col-reverse md:flex-row w-full min-h-screen items-center justify-center autoScrollEffect">
          <div className="flex flex-col items-center justify-center text-center md:items-center md:text-left w-full md:w-1/2 gap-3 p-6 md:px-12 lg:px-16">
            <h1 className="text-[#F15A24] font-bold text-4xl md:text-5xl">
              Gabriel Gaspar
            </h1>
            <h2 className="text-white text-xl md:text-2xl">
              Desenvolvedor Front-End
            </h2>
            <a
              href="/Gabriel-Front-End.pdf"
              download
              className="text-white bg-[#F15A24] hover:bg-[#ff9169] w-[150px] h-[40px] rounded-xl font-bold flex items-center justify-center transition duration-300 hover:scale-105"
              aria-label="Baixar currículo em PDF"
            >
              Download CV
            </a>
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2 p-6">
            <img
              src="img/Foto.png"
              className="rounded-full transition duration-300 hover:shadow-[0_0_50px_#F15A24] w-40 h-40 md:w-48 md:h-48 lg:w-[50%] lg:h-[50%]"
            />
          </div>
        </section>
        <section className='flex flex-col md:flex-row w-full min-h-screen autoScrollEffect' id='sobre'>
          <div className='flex flex-col items-center justify-center w-full md:w-3/6 p-4 md:p-0'>
            <img
              className='rounded-full transition duration-300 hover:shadow-[0_0_50px_#F15A24] w-40 h-40 md:w-48 md:h-48 lg:w-[40%] lg:h-[40%]'
              src='img/Foto.png'
            />
          </div>
          <div className='flex flex-col items-center justify-center w-full md:w-3/6 gap-4 p-4 md:p-0'>
            <h1 className='text-[#F15A24] text-3xl md:text-5xl font-bold'>Sobre</h1>
            <p className='text-white text-base md:text-xl text-center px-4 md:px-10'>Sou Gabriel Gaspar, desenvolvedor front-end com formação em Análise e Desenvolvimento de Sistemas. Tenho experiência prática com HTML, CSS, JavaScript, React e Tailwind CSS. Busco sempre aprimorar minhas habilidades para criar interfaces modernas, responsivas e que proporcionem uma ótima experiência ao usuário.</p>
          </div>
        </section>
        <section className='w-full min-h-screen text-center py-12 autoScrollEffect' id='habilidades'>
          <h1 className='text-[#F15A24] text-3xl md:text-5xl font-bold mb-10 md:mb-20'>Habilidades</h1>
          <div className='w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 justify-items-center items-center px-4'>
            <div className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-2 border-[#F15A24] rounded-md flex justify-center items-center bg-[#f15b241c] hover:scale-110 hover:shadow-[0_0_40px_#F15A24] transition duration-300'>
              <svg className='text-[#F15A24] w-16 h-16 md:w-24 md:h-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="m3 2l1.578 17.824L12 22l7.467-2.175L21 2zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565l-4.246 1.381l-4.281-1.455l-.288-2.932h2.024l.16 1.411l2.4.815l2.346-.763l.297-3.005H7.416l-.562-6.05h10.412z" />
              </svg>
            </div>
            <div className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-2 border-[#F15A24] rounded-md flex justify-center items-center bg-[#f15b241c] hover:scale-110 hover:shadow-[0_0_40px_#F15A24] transition duration-300'>
              <svg className='text-[#F15A24] w-16 h-16 md:w-24 md:h-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z" />
                <path fill="currentColor" fill-rule="evenodd" d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-2 border-[#F15A24] rounded-md flex justify-center items-center bg-[#f15b241c] hover:scale-110 hover:shadow-[0_0_40px_#F15A24] transition duration-300'>
              <svg className='text-[#F15A24] w-16 h-16 md:w-24 md:h-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583" />
              </svg>
            </div>
            <div className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-2 border-[#F15A24] rounded-md flex justify-center items-center bg-[#f15b241c] hover:scale-110 hover:shadow-[0_0_40px_#F15A24] transition duration-300'>
              <svg className='text-[#F15A24] w-16 h-16 md:w-24 md:h-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-2 border-[#F15A24] rounded-md flex justify-center items-center bg-[#f15b241c] hover:scale-110 hover:shadow-[0_0_40px_#F15A24] transition duration-300'>
              <svg className='text-[#F15A24] w-16 h-16 md:w-24 md:h-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82" />
              </svg>
            </div>
            <div className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-2 border-[#F15A24] rounded-md flex justify-center items-center bg-[#f15b241c] hover:scale-110 hover:shadow-[0_0_40px_#F15A24] transition duration-300'>
              <svg className='text-[#F15A24] w-16 h-16 md:w-24 md:h-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
              </svg>
            </div>
            <div className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-2 border-[#F15A24] rounded-md flex justify-center items-center bg-[#f15b241c] hover:scale-110 hover:shadow-[0_0_40px_#F15A24] transition duration-300'>
              <svg className='text-[#F15A24] w-16 h-16 md:w-24 md:h-24' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>React</title>
                <path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
            </div>
            <div className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-2 border-[#F15A24] rounded-md flex justify-center items-center bg-[#f15b241c] hover:scale-110 hover:shadow-[0_0_40px_#F15A24] transition duration-300'>
              <svg className='text-[#F15A24] w-16 h-16 md:w-24 md:h-24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd"
                  d="M7 9.969q1-4.063 5-4.063c4 0 4.5 3.047 6.5 3.555q2 .508 3.5-1.524Q21 12 17 12c-4 0-4.5-3.047-6.5-3.555Q8.5 7.938 7 9.97m-5 6.094Q3 12 7 12c4 0 4.5 3.047 6.5 3.555q2 .507 3.5-1.524q-1 4.063-5 4.063c-4 0-4.5-3.047-6.5-3.555q-2-.508-3.5 1.524"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </section>
        <section className='w-full min-h-screen py-20' id='projetos'>
          <h1 className='text-[#F15A24] text-center text-3xl md:text-5xl font-bold mb-10 md:mb-20 autoScrollEffect'>Projetos</h1>
          <div className='flex flex-col gap-10 md:gap-20 items-center'>
            <div className='flex flex-col md:flex-row w-full h-auto md:h-[400px] items-center justify-center gap-6 md:gap-10 px-4 md:px-10 autoScrollEffect'>
              <div className='w-full md:w-1/2 flex justify-center'>
                <div className='relative w-full md:w-[90%] h-[200px] md:h-[350px] max-w-[650px] group'>
                  <img
                    className='w-full h-full object-cover border-4 border-[#F15A24] rounded-md group-hover:brightness-50 transition duration-300'
                    src='img/instagram.png'
                    alt="Projeto Instagram"
                  />
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 hover:shadow-[0_0_35px_#F15A24] transition duration-300'>
                    <a
                      href='https://github.com/Gabggrand/Curso-de-TailwindCSS'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>
                    <a
                      href='https://social-login-ui.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-solid fa-up-right-from-square text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
                <h1 className='text-[#F15A24] mb-3 md:mb-5 text-2xl md:text-3xl'>Instagram</h1>
                <p className='text-white text-sm md:text-lg px-2 md:px-4'>Projeto prático criado em curso para replicar funcionalidades básicas do Instagram. Desenvolvido para aprendizado de manipulação de dados, componentes React e estilização com CSS. Interface limpa e responsiva, simulando uma rede social.</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full h-auto md:h-[400px] items-center justify-center gap-6 md:gap-10 px-4 md:px-10 autoScrollEffect'>
              <div className='w-full md:w-1/2 flex justify-center'>
                <div className='relative w-full md:w-[90%] h-[200px] md:h-[350px] max-w-[650px] group'>
                  <img
                    className='w-full h-full object-cover border-4 border-[#F15A24] rounded-md group-hover:brightness-50 transition duration-300'
                    src='img/planejamento-de-viagem.png'
                    alt="Projeto Planejamento de Viagem"
                  />
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 hover:shadow-[0_0_35px_#F15A24] transition duration-300'>
                    <a
                      href='https://github.com/Gabggrand/Planejar-Viagem'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>
                    <a
                      href='https://easytripplan.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-solid fa-up-right-from-square text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
                <h1 className='text-[#F15A24] mb-3 md:mb-5 text-2xl md:text-3xl'>Planejamento de Viagem</h1>
                <p className='text-white text-sm md:text-lg px-2 md:px-4'>
                  Projeto desenvolvido para simular o planejamento de uma viagem, com campos de destino, datas e orçamento. A interface é responsiva e foi construída com HTML, CSS e JavaScript, priorizando usabilidade e visual limpo.
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full h-auto md:h-[400px] items-center justify-center gap-6 md:gap-10 px-4 md:px-10 autoScrollEffect'>
              <div className='w-full md:w-1/2 flex justify-center'>
                <div className='relative w-full md:w-[90%] h-[200px] md:h-[350px] max-w-[650px] group'>
                  <img
                    className='w-full h-full object-cover border-4 border-[#F15A24] rounded-md group-hover:brightness-50 transition duration-300'
                    src='img/sonic 3.png'
                    alt="Projeto Sonic 3"
                  />
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 hover:shadow-[0_0_35px_#F15A24] transition duration-300'>
                    <a
                      href='https://github.com/Gabggrand/Sonic-3'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>
                    <a
                      href='https://sonic3adventure.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-solid fa-up-right-from-square text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
                <h1 className='text-[#F15A24] mb-3 md:mb-5 text-2xl md:text-3xl'>Sonic 3</h1>
                <p className='text-white text-sm md:text-lg px-2 md:px-4'>Projeto inspirado no filme Sonic 3, criado para apresentar conteúdos e referências da franquia. Desenvolvido com HTML, CSS e JavaScript, com foco em design responsivo e navegação fácil para usuários de diferentes dispositivos.</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full h-auto md:h-[400px] items-center justify-center gap-6 md:gap-10 px-4 md:px-10 autoScrollEffect'>
              <div className='w-full md:w-1/2 flex justify-center'>
                <div className='relative w-full md:w-[90%] h-[200px] md:h-[350px] max-w-[650px] group'>
                  <img
                    className='w-full h-full object-cover border-4 border-[#F15A24] rounded-md group-hover:brightness-50 transition duration-300'
                    src='img/CodeMind.png'
                    alt="Projeto CodeMind"
                  />
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 hover:shadow-[0_0_35px_#F15A24] transition duration-300'>
                    <a
                      href='https://github.com/Gabggrand/CodeMind'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>
                    <a
                      href='https://codemindapp.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-solid fa-up-right-from-square text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
                <h1 className='text-[#F15A24] mb-3 md:mb-5 text-2xl md:text-3xl'>CodeMind</h1>
                <p className='text-white text-sm md:text-lg px-2 md:px-4'>Plataforma focada em programadores, com funcionalidades de geração de código e recursos inteligentes. Desenvolvido com React e Tailwind CSS no front-end. Interface clean e responsiva, ideal para colaboração e aprendizado.</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full h-auto md:h-[400px] items-center justify-center gap-6 md:gap-10 px-4 md:px-10 autoScrollEffect'>
              <div className='w-full md:w-1/2 flex justify-center'>
                <div className='relative w-full md:w-[90%] h-[200px] md:h-[350px] max-w-[650px] group'>
                  <img
                    className='w-full h-full object-cover border-4 border-[#F15A24] rounded-md group-hover:brightness-50 transition duration-300'
                    src='img/Cafeneon.png'
                    alt="Projeto Cafeneon"
                  />
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 hover:shadow-[0_0_35px_#F15A24] transition duration-300'>
                    <a
                      href='https://github.com/Gabggrand/Cafeneon'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>
                    <a
                      href='https://cafeneon.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-solid fa-up-right-from-square text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
                <h1 className='text-[#F15A24] mb-3 md:mb-5 text-2xl md:text-3xl'>Cafeneon</h1>
                <p className='text-white text-sm md:text-lg px-2 md:px-4'>Um site para uma cafeteria fictícia que oferece informações sobre o local, menu e contato. O design é responsivo e moderno, com uso de React, Tailwind CSS e integração com Google Maps para localização. Inclui menu de navegação adaptável para dispositivos móveis e modal para exibir o mapa.</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full h-auto md:h-[400px] items-center justify-center gap-6 md:gap-10 px-4 md:px-10 autoScrollEffect'>
              <div className='w-full md:w-1/2 flex justify-center'>
                <div className='relative w-full md:w-[90%] h-[200px] md:h-[350px] max-w-[650px] group'>
                  <img
                    className='w-full h-full object-cover border-4 border-[#F15A24] rounded-md group-hover:brightness-50 transition duration-300'
                    src='img/Dev-Tradutor.png'
                    alt="Projeto Dev-Tradutor"
                  />
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 hover:shadow-[0_0_35px_#F15A24] transition duration-300'>
                    <a
                      href='https://github.com/Gabggrand/Tradutor-Dev'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>
                    <a
                      href='https://dev-translator.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-solid fa-up-right-from-square text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
                <h1 className='text-[#F15A24] mb-3 md:mb-5 text-2xl md:text-3xl'>Dev-Tradutor</h1>
                <p className='text-white text-sm md:text-lg px-2 md:px-4'>Projeto desenvolvido durante curso de React, focado em tradução automática de textos entre idiomas. Criado para praticar conceitos como componentes, estados e consumo de APIs externas. Interface simples, funcional e responsiva.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen flex flex-col items-center text-center py-16 md:py-32 gap-8 md:gap-16 autoScrollEffect" id="contato">
          <h1 className="text-[#F15A24] text-3xl md:text-5xl font-bold">Contato</h1>
          <form
            onSubmit={handleEnviar}
            className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-8 px-4 md:px-0"
          >
            <div className="flex flex-col gap-4 w-full md:w-[300px]">
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full h-12 md:h-14 px-4 rounded-md bg-transparent text-white border-2 md:border-4 border-[#F15A24] hover:shadow-[0_0_20px_#F15A24] focus:shadow-[0_0_20px_#F15A24] transition duration-300"
                placeholder="Seu nome"
                type="text"
                required
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 md:h-14 px-4 rounded-md bg-transparent text-white border-2 md:border-4 border-[#F15A24] hover:shadow-[0_0_20px_#F15A24] focus:shadow-[0_0_20px_#F15A24] transition duration-300"
                placeholder="Seu email"
                type="email"
                required
              />
              <button
                type="submit"
                className="hidden md:block bg-[#F15A24] text-white rounded-md h-12 md:h-14 w-full mt-2 border-2 md:border-4 border-[#F15A24] hover:bg-[#ff9169] hover:shadow-[0_0_20px_#F15A24] transition duration-300"
              >
                Enviar Mensagem
              </button>
            </div>

            <div className="flex flex-col w-full md:w-[500px] gap-4">
              <textarea
                placeholder="Sua mensagem"
                value={mensagem}
                onChange={e => setMensagem(e.target.value)}
                className="w-full h-48 md:h-56 p-4 rounded-md bg-transparent text-white resize-none border-2 md:border-4 border-[#F15A24] hover:shadow-[0_0_20px_#F15A24] focus:shadow-[0_0_20px_#F15A24] transition duration-300"
                required
              ></textarea>
              <button
                type="submit"
                className="block md:hidden bg-[#F15A24] text-white rounded-md h-12 w-full mx-auto border-2 border-[#F15A24] hover:bg-[#ff9169] hover:shadow-[0_0_20px_#F15A24] transition duration-300"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default App