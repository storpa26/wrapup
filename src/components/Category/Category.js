import './Category.css'
import { Link } from 'react-router-dom';
const Category = (props) => {


    const { title, img, id, description } = props.cat;
    return (
        <div className='col-lg-3 col-sm-12 mx-auto'>
            <div className="border border-1 p-3 mx-auto my-2 category-card">
                <img src={img} alt="" height="120" width="180" />
                <hr />
                <h4 className="fw-bold text-center">{title}</h4>
                <p className="p-3">{description}</p>
                <div className="detail-btn-container">
                    <Link to={`courses/${id}`}>
                        <button className="detail-btn mt-auto">See Details</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Category;