import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './CardMessage.css'

function CardMessage() {
    return (

        <CardGroup>

            <Card className='card d-flex align-self-center  ' style={{ borderRadius: "15px" }}>

                <Card.Img className="bd-placeholder-img rounded-circle  w-50 h-100 " variant="top" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80" />
                <Card.Body>
                    <Card.Title><h3>HOD's message</h3></Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, non.{' '}
                    </Card.Text>
                </Card.Body>


            </Card>

            <Card className='card d-flex align-self-center ' style={{ borderRadius: "15px" }}>
                <Card.Img className="bd-placeholder-img rounded-circle  w-50 h-100 " variant="top" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80" />
                <Card.Body>
                    <Card.Title><h3>Coordinator's message</h3></Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, non.{' '}
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card className='card d-flex align-self-center ' style={{ borderRadius: "15px" }}>
                <Card.Img className="bd-placeholder-img rounded-circle  w-50 h-100 " variant="top" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80" />
                <Card.Body>
                    <Card.Title><h3>President's message</h3></Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, non.{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default CardMessage;