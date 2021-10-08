import useAuth from '../../hooks/useAuth';

const Home = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
