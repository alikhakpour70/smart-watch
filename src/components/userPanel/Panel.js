import { NavLink } from 'react-router-dom';
import './panelStyle.css'

const Panel = () => {
  return (
    <section className="panel-container">
      <section className="panel-parent">
        {/* <h4>پنل کاربری</h4> */}
        <div className="panel-header">
            <div>image</div>
            <div>User Name</div>
        </div>

        <div className='panel-control'>
            <div className='panel-buy-product'><i>+</i><p>محصولات خریداری شده</p></div>
            <div className='panel-wait-product'><i>+</i><p>محصولات در انتظار خرید</p></div>
            <div className='panel-rate-user'><i>0</i><p>امتیاز</p></div>
        </div>
        <div className='panel-footer'>
          <NavLink to="/" >رفتن به صفحه اصلی</NavLink>
          <p className='logout'>خروج</p>
        </div>
      </section>
    </section>
  );
};

export default Panel;
