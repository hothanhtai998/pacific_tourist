/* Outside Source Library */
import classNames from 'classnames/bind';
/* Inside Source */
import styles from './Pagination.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Pagination({ itemPerPage, totalItems, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='row'>
      <div className={cx('pagination')}>
        <ul>
          <NavLink onClick={() => paginate(1)}>
            <span>&lt;</span>
          </NavLink>
          {pageNumbers.map((number, key) => (
            <NavLink
              key={key}
              className={(page) => cx('pageNumber', { active: page.isActive })}
              onClick={() => paginate(number)}
            >
              {number}
            </NavLink>
          ))}
          <NavLink onClick={() => paginate(pageNumbers.length)}>
            <span>&gt;</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;

// (
//   {/* <NavLink className={cx('page')}>
//   <span>&lt;</span>
// </NavLink> */}
//   <li keys={number}></li>
// {/* <NavLink className={cx('page')}>
//   <span>&gt;</span>
// </NavLink> */}
// ))
