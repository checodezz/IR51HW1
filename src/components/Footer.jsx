const Footer = () => {
  return (
    <footer className="bg-body-tertiary py-3">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
