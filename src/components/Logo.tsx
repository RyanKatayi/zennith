import logo from '../assets/zenith.png'; // Adjust the path as necessary

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Company Logo" className="w-30 h-30" />
    </div>
  );
};

export default Logo;
