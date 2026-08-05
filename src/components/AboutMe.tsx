const AboutMe = () => {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl space-y-4">
        <header>
          <h1 className="text-xl font-semibold text-white">About Me</h1>
        </header>
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm text-slate-400">
            This website was created by Rahul Singh.
            <br />
            <b>Email:</b> hisinghrahul44895@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export { AboutMe };
