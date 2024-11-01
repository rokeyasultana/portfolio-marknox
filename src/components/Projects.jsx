import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Project = () => {
  const [categories] = useState({
   Html: [
      {
        id: 1,
        img: 'https://i.ibb.co.com/PGP8GvQ/Paradise-Place-Convention-Center.png',
        name: 'Paradise-Place',
        details:'It is a landing page about convention center.',
        link: 'https://rokeyasultana.github.io/convention-center/',
      },
      {
        id: 2,
        img: 'https://i.ibb.co.com/12n6HKw/Sports-Buzz.png',
        name: 'Sports Buzz',
        details:'This website is about sports and players. It is also a landing page. ',
        link: 'https://rokeyasultana.github.io/world-cup/',
      },
      {
        id: 3,
        img: 'https://i.ibb.co.com/0Jd6VJd/Panda-Commerce.png',
        name: 'Panda Commerce',
        details: 'Panda Commerce is aboput simple e-commerce landing page by using html and bootstrap.',
        link: 'https://rokeyasultana.github.io/panda-commerce-bootstrap/index.html',
      },
    ],
   JavaScript: [
      {
        id: 1,
        img: 'https://i.ibb.co.com/qL6X6t6/Temperature-Hot.png',
        name: 'Temparature hot',
        details:'A temperature website provides users with real-time weather updates, including current temperatures, forecasts, and climate information for specific locations.',
        link: 'https://rokeyasultana.github.io/temparature-hot-solution/',
      },
      {
        id: 2,
        img: 'https://i.ibb.co.com/W38R0fq/Secure-Pass-1.png',
        name: 'SecurePass',
        details:'password generator website is an online tool. It allowing users to choose the length of the password and include specific character types, such as uppercase letters, lowercase letters, numbers, and symbols',
        link: 'https://rokeyasultana.github.io/Secure-Pass/',
      },
      {
        id: 3,
        img: 'https://i.ibb.co.com/QjS8cbZ/Tic-Tac-Toe.png',
        name: 'Tic Tac Toe',
        details:'A Tic Tac Toe website offers a classic, simple game where two players compete to align three symbols—either "X" or "O"—in a row, column, or diagonal on a 3x3 grid.',
        link: 'https://rokeyasultana.github.io/Tic-Tac-Toe/index.html',
      }
      
    ],
    React: [
      {
        id: 1,
        img: 'https://i.ibb.co.com/v4qRtNQ/Program-Source.png',
        name: 'Program Source',
        details: "Online web development learning platform.Premium users can enroll in courses. General users can download course details in PDF.",

        link: 'https://warm-semifreddo-680cec.netlify.app/',
      },
      {
        id: 2,
        img: 'https://i.ibb.co.com/jh1gJ9b/Essences-For-Life.png',
        name: 'Essence For Life',
        details: "Simple warehouse management platform.Users can deliver or restock products.Users can sign up with their Google account besides email and password.",
        link: 'https://dashing-kashata-47b25e.netlify.app/',
      },
      {
        id: 3,
        img: 'https://i.ibb.co.com/mtkMNjy/Quiz-Quark.png',
        name: 'QuizQuark',
        details: "Online Web Development Quizzes & Trivia.Different topics and quizzes. Anyone can participate in quiz. Everyone can see correct answer.",
        link: 'https://lustrous-frangollo-40406d.netlify.app/',
      },
    ],
   
  });

  return (
    <div id='projects' className="  flex items-center justify-center min-h-screen px-4 py-16 lg:mt-[-100px]">
      <div className="container mx-auto flex flex-col gap-8 max-w-5xl">
        {/* Title section */}
        <h2  data-aos="zoom-in-up" data-aos-duration="1500" className="mt-[-180px] text-[30px] text-gray-500  mb-6 text-center ">
          Projects
        </h2>

        {/* Tabs and projects */}
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 rounded-xl justify-center">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium text-gray-500  rounded-lg border-b-2 border-gray-400 ',
                    'focus:outline-none',
                    selected ? 'text-gray-400  shadow' : 'hover:bg-gray-400 hover:text-white '
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {Object.values(categories).map((projects, idx) => (
              <Tab.Panel key={idx}>
                <div data-aos="fade-up-left"  data-aos-duration="1500" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-gray-300 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    >
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-32 object-cover rounded-md mb-3"
                      />
                      <h3 className="text-lg font-semibold text-gray-500  mb-2">
                        {project.name}
                      </h3>
                      <h3 className="text-sm font-semibold text-gray-500  mb-2">
                        {project.details}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#77786B] flex items-center text-[15px] group"
                      >
                        Live Site{' '}
                        <FiArrowRight className="ml-2 mt-1 transition duration-300 group-hover:animate-ping" />
                      </a>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Project;
