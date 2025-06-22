import { FaBalanceScale, FaGavel } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <Link to={to} className="nav-link">
      {children}
    </Link>
  </motion.div>
);

export const Header: React.FC = () => {
  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <nav className="nav">
        <Link to="/" className="logo">
          <motion.div 
            className="logo-icon"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <FaBalanceScale />
          </motion.div>
          <div>
            <div className="logo-text">SLDA</div>
            <div className="logo-subtitle">Legal Intelligence</div>
          </div>
        </Link>
        
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/analysis">Analyze</NavLink>
          <NavLink to="/features">Features</NavLink>
        </div>

        <Link to="/analysis" className="cta-button">
          <FaGavel />
          Start Analysis
        </Link>
      </nav>
    </motion.header>
  );
};