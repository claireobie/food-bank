import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class Inventory extends React.Component {
  render() {
    return (
      <Card className="container" align="center">
        <CardTitle title="React Application" subtitle="This is the Inventory Page." />
      </Card>
    )
  }
};

export default Inventory;
