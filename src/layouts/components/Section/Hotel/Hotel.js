/* Outside Source Library */
import PropTypes from 'prop-types';
import { useState } from 'react';

/* Inside Source */
import Heading from '../Heading/Heading';
import HotelContent from './HotelContent';
import Pagination from '~/layouts/components/Pagination';
import RevealBox from '~/components/RevealBox';
import images from '~/assets/images';

const hotelData = {
  subTitle: 'Hotel',
  title: 'Hotel Place',
  captions: [],
};

const hotelDb = [
  {
    id: 1,
    image: images.hotel[0],
    price: '$550/Person',
    day: '5 day tour',
    boxTitle: 'Hotel 1',
    location: 'Location 1',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Mountain',
  },
  {
    id: 2,
    image: images.hotel[1],
    price: '$250/Person',
    day: '2 day tour',
    boxTitle: 'Hotel 2',
    location: 'Location 2',
    bathNumber: 1,
    bedNumber: 1,
    nearBy: 'Beach',
  },
  {
    id: 3,
    image: images.hotel[2],
    price: '$150/Person',
    day: '3 day tour',
    boxTitle: 'Hotel 3',
    location: 'Location 3',
    bathNumber: 1,
    bedNumber: 2,
    nearBy: 'Mountain',
  },
  {
    id: 4,
    image: images.hotel[3],
    price: '$90/Person',
    day: '1 day tour',
    boxTitle: 'Hotel 4',
    location: 'Location 4',
    bathNumber: 1,
    bedNumber: 1,
    nearBy: 'River',
  },
  {
    id: 5,
    image: images.hotel[4],
    price: '$550/Person',
    day: '5 day tour',
    boxTitle: 'Hotel 5',
    location: 'Location 5',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Mountain',
  },
  {
    id: 6,
    image: images.hotel[5],
    price: '$550/Person',
    day: '5 day tour',
    boxTitle: 'Hotel 6',
    location: 'Location 6',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Mountain',
  },
  {
    id: 7,
    image: images.hotel[6],
    price: '$350/Person',
    day: '4 day tour',
    boxTitle: 'Hotel 7',
    location: 'Location 7',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Mountain',
  },
  {
    id: 8,
    image: images.hotel[7],
    price: '$999/Person',
    day: '4 day tour',
    boxTitle: 'Hotel 8',
    location: 'Location 8',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Mountain',
  },
  {
    id: 9,
    image: images.hotel[8],
    price: '$888/Person',
    day: '3 day tour',
    boxTitle: 'Hotel 9',
    location: 'Location 9',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'City',
  },
];

function Hotel({ page }) {
  const [destinations] = useState(hotelDb);
  const [currentPage, setCurrentPage] = useState(1);
  const [destinationPerPage] = useState(6);

  const checkPage = String(page).toLowerCase();

  const indexOfLastPost = currentPage * destinationPerPage;
  const indexOfFirstPost = indexOfLastPost - destinationPerPage;
  const currentDestination = destinations.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <RevealBox>
        {checkPage !== 'destination' ||
          (currentPage !== 'hotel' && (
            <div className='row'>
              <div className='col col-sm-12 col-md-12 col-lg-12'>
                <Heading classNames='text-center' data={hotelData} />
              </div>
            </div>
          ))}
        <div className='row'>
          {currentDestination.map((destination, key) => {
            return (
              <HotelContent key={key} data={hotelData} database={destination} />
            );
          })}
        </div>
      </RevealBox>
      <Pagination
        itemPerPage={destinationPerPage}
        totalItems={destinations.length}
        paginate={paginate}
      />
    </>
  );
}

Hotel.propTypes = {
  data: PropTypes.object.isRequired,
  database: PropTypes.array.isRequired,
};

export default Hotel;
