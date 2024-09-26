import React from 'react';
import { Film } from 'lucide-react';

const QuoteCard = ({ image, quote, author, isGrayscale = true }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-4">
        <div className={`w-24 h-24 rounded-full overflow-hidden mb-3 ${isGrayscale ? 'grayscale' : ''}`}>
          <img
            src={image || "/api/placeholder/96/96"}
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
      image: "/api/placeholder/96/96",
      quote: "Without commitment, you'll never start. But more importantly, without consistency, you'll never finish.",
      author: "Denzel Washington"
    },
    {
      image: "/api/placeholder/96/96",
      quote: "Life is like a box of chocolates. You never know what you're gonna get.",
      author: "Forrest Gump"
    },
    {
      image: "/api/placeholder/96/96",
      quote: "May the Force be with you.",
      author: "Star Wars"
    },
    {
      image: "/api/placeholder/96/96",
      quote: "I'll be back.",
      author: "The Terminator"
    }
  ];

  const topMovies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "12 Angry Men",
    "Schindler's List",
    "The Lord of the Rings: The Return of the King",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "Forrest Gump",
    "Inception"
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
        <h2 className="text-2xl font-semibold mb-4">Top Ten Movies This Month</h2>
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