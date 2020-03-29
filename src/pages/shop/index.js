import React, { Component } from 'react';
import SHOP_DATA from './shopData';
import ColectionPreview from '../../components/collectionPreview/';
export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionPreview }) => (
          <ColectionPreview key={id} {...otherCollectionPreview} />
        ))}
      </div>
    );
  }
}
