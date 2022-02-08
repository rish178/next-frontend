import Header from '../layouts/Header/index';
import Footer from '../layouts/Footer/index';

const index = (props) => {
  return <div className={props.children}>
        <Header/>
        {props.children}
        <Footer/>

  </div>;
};

export default index;
