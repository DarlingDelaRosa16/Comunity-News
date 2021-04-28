import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const Publicity = () => {
    return (
        <div className="m-1">
            <Card>
                <CardImg top width="100%" src="http://via.placeholder.com/200x100" alt="Card cap" />
                <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
 
export default Publicity;