import React from 'react';
import MenuItem from '../menu-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../components/directory/directory.selectors';
import './style.scss';

const Directory = ({sections}) => (
   <div className="directory-menu">
      {' '}
      {sections.map(({ id, ...otherSectionProps }) => (
         <MenuItem key={id} {...otherSectionProps} />
      ))}{' '}
   </div>
);

const mapsStateToProps = createStructuredSelector({
   sections: selectDirectorySections,
});

export default connect(mapsStateToProps)(Directory);
