const ErrorHandle = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops! 404</h1>
          <p className="py-6">
            Looks like you took a wrong turn. The products you’re searching for isn’t here anymore
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandle;
