import './Projects.css'

const Projects = () => {
    return (
        <div className='container-fluid' id='Projects'>
            <h1 className="d-flex justify-content-center mt-5">PROJECTS</h1>
            <div className="row d-flex justify-content-center mt-5" style={{gap:'40px'}}>
                <div className='col-md-3  projects-card'>
                   <h4 className='d-flex justify-content-center p-3'>Expense Tracking App</h4>
                   <p>A sleek and simple React-based expense tracker to manage your finances in real time.</p>
                   <div className=' d-flex justify-content-center mt-5'>                
                   <a href='https://expensetracking-18f4e.web.app/' target='blank'  className='button-85'>View Project
                   </a>
                   </div>
                </div>
                <div className='col-md-3  projects-card'>
                   <h4 className='d-flex justify-content-center p-3'>Furniture E-Shop</h4>
                   <p>A modern e-commerce furniture store built with sleek UI and seamless shopping experience.</p>
                   <div className=' d-flex justify-content-center mt-5'>                
                   <a href='https://furniture-shop-2024.web.app' target='blank'  className='button-85'>View Project
                   </a>
                   </div>
                </div>
                <div className='col-md-3  projects-card'>
                   <h4 className='d-flex justify-content-center p-3'>Weather Forecast App</h4>
                   <p>A sleek weather app delivering real-time forecasts with location-based insights.</p>
                   <div className=' d-flex justify-content-center mt-5'>                
                   <a href='https://weather-e4012024.web.app/' target='blank'  className='button-85'>View Project
                   </a>
                   </div>
                </div>                
            </div>
        </div>
    )
}

export default Projects;