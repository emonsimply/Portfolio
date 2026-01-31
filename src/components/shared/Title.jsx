const Title = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-6">
      <p className="text-sm text-secondary font-one mb-1.5 ">{subtitle}</p>
      <h2 className="text-4xl md:text-[46px] font-bold leading-[72px] text-primary font-two">{title}</h2>
    </div>
  );
};

export default Title;
