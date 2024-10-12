import React from 'react';
import Navbar from '../components/Navbar';
import githubimg from '../assets/github-icon.svg'
import vscodeimg from '../assets/vscode.png'
import slackimg from '../assets/Slack.png'
import 'primeicons/primeicons.css';

const Integrations: React.FC = () => {
  const integrations = [
    {
      title: 'GitHub Integration',
      description: 'Easily pull code from GitHub repositories for conversion.',
      image: githubimg, // Replace with actual GitHub integration image path
    },
    {
      title: 'VS Code Extension',
      description: 'Convert code directly from your VS Code editor.',
      image: vscodeimg, // Replace with actual VS Code extension image path
    },
    {
      title: 'Slack Integration',
      description: 'Receive notifications in Slack when your code is converted.',
      image: slackimg, // Replace with actual Slack integration image path
    }
  ];

  return (
    <>
      <Navbar />
    <div className="integrations-container bg-transparent p-6">
      <h1 className="text-4xl text-white font-bold text-center mb-10 mt-10">Integrations</h1>

      <div className="cards-container flex flex-wrap justify-center gap-6">
        {integrations.map((integration, index) => (
          <div key={index} className="card bg-gray-800 flex justify-center flex-col items-center text-white rounded-lg shadow-lg p-6 w-full sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
            <img
              src={integration.image}
              alt={integration.title}
              className="object-cover rounded-md mb-4 "
              style={{width: '200px'}}
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">{integration.title}</h3>
            <p className="text-lg text-center">{integration.description}</p><br></br>
            <button>Learn More <i className="pi pi-angle-right"></i></button>
          </div>
        ))}
      </div>

    </div>
    <footer className="bg-gray-800 w-full text-center py-4">
        <p className="text-white text-sm">All rights reserved</p>
      </footer>
    </>
  );
};

export default Integrations;
