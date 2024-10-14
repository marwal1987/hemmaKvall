const Modal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center overflow-y-auto p-4">
      <div className="bg-stone-100 grid md:grid-cols-2 sm:grid-cols-1 gap-6 p-6 rounded-lg shadow-lg max-h-screen w-full max-w-3xl overflow-y-auto mt-24">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-md w-full"
        />
        <div className="max-w-96 flex flex-col items-start justify-start gap-2">
          <h2 className="text-left">{movie.Title}</h2>
          <p className="text-left">
            <strong>Year:</strong> {movie.Year}
          </p>
          <p className="text-left">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="text-left">{movie.Plot}</p>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-white text-white hover:text-red-500 border border-red-500 px-4 w-full"
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
