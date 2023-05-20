import React from 'react'; 
import '../Team/Team.css'
import '../../Responsive/Responsive.css' 
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';  

const Team = () => {
    return (
        <section id="team">
            <div className="container">
                    <div className="weare">
                        <h1>We are awesome <span className='spans'>TEAM</span> </h1>
                        <p>Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p> 
                        <p> Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p> 
                    </div> 
            </div>
    </section>
    );
};

export default Team;