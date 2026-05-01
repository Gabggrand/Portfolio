import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css'

function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);

  const skills = [
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Spring Boot", icon: "devicon-spring-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "REST API", icon: "devicon-fastapi-plain" },

    { name: "Postman", icon: "devicon-postman-plain" },
    { name: "Insomnia", icon: "devicon-insomnia-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },

    { name: "React", icon: "devicon-react-original" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "CSS", icon: "devicon-css3-plain" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  ];

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
              Desenvolvedor Back-End
            </h2>
            <a
              href="/CV-Gabriel.pdf"
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
            <p className='text-white text-base md:text-xl text-center px-4 md:px-10'>Desenvolvedor Backend Java com foco em APIs REST utilizando Spring Boot e integração com MySQL. Experiência prática com CRUD, validação de dados, tratamento de erros e arquitetura em camadas. Possui background em frontend como diferencial.</p>
          </div>
        </section>
        <section className='w-full min-h-screen text-center py-12 autoScrollEffect' id='habilidades'>
          <h1 className='text-[#F15A24] text-3xl md:text-5xl font-bold mb-10 md:mb-20'>
            Habilidades
          </h1>
          <div className='w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 justify-items-center items-center px-4'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='w-[100px] h-[120px] md:w-[130px] md:h-[150px] border-2 border-[#F15A24] rounded-md flex flex-col justify-center items-center bg-[#f15b241c] hover:scale-110 hover:shadow-[0_0_40px_#F15A24] transition duration-300'
              >
                <i className={`${skill.icon} text-[#F15A24] text-5xl md:text-7xl`}></i>
                <p className='mt-2 text-sm md:text-base text-white'>
                  {skill.name}
                </p>
              </div>
            ))}
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
                    src='img/Tasks API (Spring Boot + MySQL).png'
                    alt="Projeto Tasks API"
                  />
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300'>
                    <a
                      href='https://github.com/Gabggrand/Tasks-API'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>

                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
                <h1 className='text-[#F15A24] mb-3 md:mb-5 text-2xl md:text-3xl'>
                  Tasks API
                </h1>
                <p className='text-white text-sm md:text-lg px-2 md:px-4'>
                  API REST desenvolvida com Spring Boot para gerenciamento de tarefas, com operações CRUD completas. Integração com MySQL, validação de dados e tratamento de erros, seguindo arquitetura em camadas.
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full h-auto md:h-[400px] items-center justify-center gap-6 md:gap-10 px-4 md:px-10 autoScrollEffect'>
              <div className='w-full md:w-1/2 flex justify-center'>
                <div className='relative w-full md:w-[90%] h-[200px] md:h-[350px] max-w-[650px] group'>
                  <img
                    className='w-full h-full object-cover border-4 border-[#F15A24] rounded-md group-hover:brightness-50 transition duration-300'
                    src='img/Gerenciador De Tarefas.png'
                    alt="Projeto Tasks API"
                  />
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300'>
                    <a
                      href='https://github.com/Gabggrand/task-manager'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>

                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
                <h1 className='text-[#F15A24] mb-3 md:mb-5 text-2xl md:text-3xl'>
                  Gerenciador de Tarefas | Java
                </h1>
                <p className='text-white text-sm md:text-lg px-2 md:px-4'>
                  Aplicação desenvolvida em Java puro para gerenciamento de tarefas, permitindo criar, listar, concluir e remover registros, com persistência de dados em arquivo.
                  O projeto aplica conceitos de Programação Orientada a Objetos, manipulação de arquivos e estruturas de dados, com foco em organização e boas práticas na linguagem.
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row w-full h-auto md:h-[400px] items-center justify-center gap-6 md:gap-10 px-4 md:px-10 autoScrollEffect'>
              <div className='w-full md:w-1/2 flex justify-center'>
                <div className='relative w-full md:w-[90%] h-[200px] md:h-[350px] max-w-[650px] group'>
                  <img
                    className='w-full h-full object-cover border-4 border-[#F15A24] rounded-md group-hover:brightness-50 transition duration-300'
                    src='img/Tasks API (Spring Boot).png'
                    alt="Projeto Tasks API"
                  />
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300'>
                    <a
                      href='https://github.com/Gabggrand/Tasks-API'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white p-2 rounded-full hover:bg-[#F15A24] hover:text-white transition'
                    >
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>

                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
                <h1 className='text-[#F15A24] mb-3 md:mb-5 text-2xl md:text-3xl'>
                  Tasks API | Spring Boot
                </h1>
                <p className='text-white text-sm md:text-lg px-2 md:px-4'>
                  API REST desenvolvida com Spring Boot para gerenciamento de tarefas, permitindo criar, listar, buscar, atualizar e excluir registros.
                  O projeto utiliza arquitetura em camadas e foi desenvolvido com foco em práticas de desenvolvimento backend e construção de APIs escaláveis.
                </p>
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