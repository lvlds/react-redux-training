import React from 'react';
import PropTypes from 'prop-types';
import Search from 'components/Search/Search';
import ItemListing from 'components/ItemListing/ItemListing';
import { Container, Row, Col, Button } from 'reactstrap';

import initialState from '../../store/initialState';

class Basic extends React.Component {
  componentDidMount = () => {
    this.props.fetchItems();
    this.props.addedItemListener();
    this.props.removedItemListener();
  };

  render = () => {
    const { items, addItem, removeItem, removeAllItems, doSearch } = this.props;
    return (
      <div>
        <Container style={styles.container}>
          <Row className="justify-content-center" style={styles.row}>
            <Col sm={{ size: 'auto', offset: 1 }}>
              <Button
                color="primary"
                onClick={addItem.bind(this, `Item ${new Date()}`)}
              >
                Add element
              </Button>
            </Col>
            <Col sm={{ size: 'auto', offset: 1 }}>
              <Button color="danger" onClick={removeAllItems.bind(this, items)}>
                Reset
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-center" style={styles.row}>
            <Search doSearch={doSearch} />
          </Row>
          <Row className="justify-content-center" style={styles.row}>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <ItemListing items={items} removeItem={removeItem} />
          </Row>
        </Container>
      </div>
    );
  };
}
const styles = {
  container: {
    padding: 10
  },
  row: {
    padding: 10
  },
  removeBtn: {
    paddingLeft: 50
  }
};

Basic.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  removeAllItems: PropTypes.func.isRequired
};

Basic.defaultProps = {
  items: initialState.items
};

export default Basic;
