import React from 'react';
import { ContributorLink } from './ContributorLink';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-xs mt-24 pb-4 px-4 text-center">
      {/* Contributors */}
      <div>
        Made with <span className="text-red-500">❤</span> by{' '}
        <ContributorLink href="https://github.com/Techiral/" name="Techiral" />
      </div>

      <div className="border border-black w-12 my-2" />

      {/* Source Code */}
      <div>
        <a
          href="https://github.com/Techiral/solvegpt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row justify-center items-center hover:text-brand-red font-bold"
        >
          <FaGithub />
          <span className="ml-1">Source Code</span>
        </a>
      </div>
    </div>
  );
};
