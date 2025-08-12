import React from 'react';
import InternetIdentity from './InternetIdentity';
import { canisterId } from 'declarations/backend';

const Header = ({ actor, setActor, isAuthenticated, setIsAuthenticated, tokenCreated, setTokenCreated }) => {
  const handleDeleteToken = async () => {
    try {
      const result = await actor.delete_token();
      if ('Ok' in result) {
        setTokenCreated(false);
      } else if ('Err' in result) {
        console.error('Failed to delete token:', result.Err);
        alert('Failed to delete token: ' + result.Err);
      }
    } catch (error) {
      console.error('Error deleting token:', error);
    }
  };

  return (
    <header className="bg-infinite mb-2 p-4 text-white">
      <div className="mx-auto flex flex-row flex-wrap items-center justify-between gap-2">
        <h1 className="text-4xl font-bold">Fungible Token</h1>
        <div className="flexitems-center">
          <InternetIdentity
            setActor={setActor}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
          {isAuthenticated && tokenCreated && (
            <div>
              <button
                
              >
                
              </button>
              <button
                
                
              >
                
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
