import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row, Col} from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
    <Row className="d-flex flex-wrap">
        <Col key="all" xs="auto" className="p-1" style={{flex: '0 0 auto'}}>
            <Card
                style={{cursor:'pointer'}}
                className="p-3"
                onClick={() => device.setSelectedBrand({})}
                border={!device.selectedBrand.id ? 'danger' : 'light'}
            >
                Все бренды
            </Card>
        </Col>
        {device.brands.map(brand =>
            <Col key={brand.id} xs="auto" className="p-1" style={{flex: '0 0 auto'}}>
                <Card
                style={{cursor:'pointer'}}
                key={brand.id}
                className="p-3"
                onClick={() => device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}>
                    {brand.name}
                </Card>
            </Col>
        )}
    </Row>
    );
});

export default BrandBar;