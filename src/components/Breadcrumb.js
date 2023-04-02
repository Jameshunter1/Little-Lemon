import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol className="breadcrumb-list">
        {paths.map((path, index) => (
          <li key={index} className="breadcrumb-item">
            <Link to={path.url} className="breadcrumb-link">{path.name}</Link>
            {index < paths.length - 1 && (
              <span className="breadcrumb-divider">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;