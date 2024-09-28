import React from 'react';
import { Film } from 'lucide-react';
import mosesImage from './images/moses.jpg';
import mcImage from './images/mc.jpg';
import chrisImage from './images/chris.jpg';
import casidyImage from './images/casidy.jpg';

const QuoteCard = ({ image, quote, author, isGrayscale = true }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-4">
        <div className={`w-24 h-24 rounded-full overflow-hidden mb-3 ${isGrayscale ? 'grayscale' : ''}`}>
          <img
            src={image}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <blockquote className="text-center text-gray-700">
          <p className="mb-2 text-sm">{quote}</p>
          <cite className="text-gray-900 font-bold text-xs">{author}</cite>
        </blockquote>
      </div>
    </div>
  );
};

function MovieItem({ title, rank }) {
  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded">
      <span className="font-bold text-lg">{rank}</span>
      <Film size={20} />
      <span>{title}</span>
    </div>
  );
}

const MovieQuotesPage = () => {
  const quotes = [
    {
      image: mosesImage,
      quote: "All those moments will be lost in time, like tears in the rain.",
      author: "Roy Batty, Blade Runner 1982"
    },
    {
      image: mcImage,
      quote: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds. And that's what you've given me. That's what I hope to give to you forever.",
      author: "Noah Calhoun, The Notebook"
    },
    {
      image: chrisImage,
      quote: "You either die a hero or you live long enough to see yourself become the villain.",
      author: "Harvey Dent, The Dark Knight"
    },
    {
      image: casidyImage,
      quote: "One often meets his destiny on the road he takes to avoid it.",
      author: "Kung Fu Panda"
    }
  ];

  const topMovies = [
    "Come and See, 1985",
    "Paris Texas, 1984",
    "Autumn Sonata, 1978",
    "Memories of Murder, 2003",
    "The Godfather, 1972",
    "The Seventh Seal, 1957",
    "Goodfellas, 1990",
    "The Lord of the Rings: The Fellowship of the Ring, 2001",
    "Persona, 1966",
    "Harakiri, 1962"
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Movie Quotes & Top Ten</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Famous Movie Quotes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} {...quote} />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Top Ten Movies Of All Time by Moses Abetianbe </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topMovies.map((movie, index) => (
            <MovieItem key={index} title={movie} rank={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieQuotesPage;