import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const CardPublicities = (props) => {

    return (
        <Card>
            <CardImg top width="100%" src={props.infoCard.img} alt={props.infoCard.altText} />
            <CardBody>
            <CardTitle tag="h6"><a href={props.infoCard.path} className="text-dark" >{props.infoCard.title}</a></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.infoCard.subTitle}</CardSubtitle>
            </CardBody>
        </Card>
    );
}
 
export default CardPublicities;