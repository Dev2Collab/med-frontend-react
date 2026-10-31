const HomePage: React.FC = () => {
  return (
    <div>
      home 
      <img src="/images/d2.png" style={{ width: 200 }} height={100} alt="" />
      {/* work with only ./ name of the asset in public */}
      <img src="./images/d2.png" width={200} height={100} alt="" />
    </div>
  );
};

export default HomePage;
