 import LatestProduct from '../../LatestProduct/LatestProduct';

const userPromis = fetch("http://localhost:3000/latest-products")
  .then(res => res.json());

const Home = () => {
  return (
    <div>
      <LatestProduct userPromis={userPromis}></LatestProduct>
    </div>
  );
};

export default Home;
