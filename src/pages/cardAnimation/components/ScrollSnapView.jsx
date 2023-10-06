const ScrollSnapView = ({ children, scrollRef }) => {
  return (
    <div
      ref={scrollRef}
      className="w-full h-screen overflow-y-scroll"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {children}
    </div>
  );
};

export { ScrollSnapView };
