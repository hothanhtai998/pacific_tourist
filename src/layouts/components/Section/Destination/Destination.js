/* Outside Source Library */
import PropTypes from 'prop-types';
import { useState } from 'react';

/* Inside Source */
import Heading from './../Heading/Heading';
import DestinationContent from './DestinationContent';
import Pagination from '~/layouts/components/Pagination';
import RevealBox from '~/components/RevealBox';
import images from '~/assets/images';

const destinationData = {
  subTitle: 'Destination',
  title: 'Tour Destination',
  captions: [],
};

const destinationDb = [
  {
    id: 1,
    image: images.destination[0],
    price: '$550/Person',
    day: '5 day tour',
    boxTitle: 'Destination 1',
    location: 'Location 1',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Mountain',
  },
  {
    id: 2,
    image: images.destination[1],
    price: '$250/Person',
    day: '2 day tour',
    boxTitle: 'Destination 2',
    location: 'Location 2',
    bathNumber: 1,
    bedNumber: 1,
    nearBy: 'Beach',
  },
  {
    id: 3,
    image: images.destination[2],
    price: '$150/Person',
    day: '3 day tour',
    boxTitle: 'Destination 3',
    location: 'Location 3',
    bathNumber: 1,
    bedNumber: 2,
    nearBy: 'Mountain',
  },
  {
    id: 4,
    image: images.destination[3],
    price: '$90/Person',
    day: '1 day tour',
    boxTitle: 'Destination 4',
    location: 'Location 4',
    bathNumber: 1,
    bedNumber: 1,
    nearBy: 'River',
  },
  {
    id: 5,
    image: images.destination[4],
    price: '$550/Person',
    day: '5 day tour',
    boxTitle: 'Destination 5',
    location: 'Location 5',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Mountain',
  },
  {
    id: 6,
    image: images.destination[5],
    price: '$550/Person',
    day: '5 day tour',
    boxTitle: 'Destination 6',
    location: 'Location 6',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Mountain',
  },
  {
    id: 7,
    image: images.destination[6],
    price: '$350/Person',
    day: '4 day tour',
    boxTitle: 'Destination 7',
    location: 'Location 7',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Mountain',
  },
  {
    id: 8,
    image: images.destination[7],
    price: '$999/Person',
    day: '4 day tour',
    boxTitle: 'Destination 8',
    location: 'Location 8',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Mountain',
  },
  {
    id: 9,
    image: images.destination[8],
    price: '$888/Person',
    day: '3 day tour',
    boxTitle: 'Destination 9',
    location: 'Location 9',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'City',
  },
  {
    id: 10,
    image: images.destination[9],
    price: '$550/Person',
    day: '1 day tour',
    boxTitle: 'Destination 10',
    location: 'Location 10',
    bathNumber: 3,
    bedNumber: 2,
    nearBy: 'Mountain',
  },
  {
    id: 11,
    image: images.destination[10],
    price: '$350/Person',
    day: '5 day tour',
    boxTitle: 'Destination 11',
    location: 'Location 11',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'Forest',
  },
  {
    id: 12,
    image: images.destination[11],
    prices: '$950/Person',
    day: '7 day tour',
    boxTitle: 'Destination 12',
    location: 'Location 12',
    bathNumber: 2,
    bedNumber: 1,
    nearBy: 'City',
  },
];

function Destination({ page }) {
  const [destinations] = useState(destinationDb);
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
        {checkPage !== 'destination' && currentPage !== 'hotel' && (
          <div className='row'>
            <div className='col col-sm-12 col-md-12 col-lg-12'>
              <Heading classNames='text-center' data={destinationData} />
            </div>
          </div>
        )}
        <div className='row'>
          {currentDestination.map((destination, key) => {
            return (
              <DestinationContent
                key={key}
                data={destinationData}
                database={destination}
              />
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

Destination.propTypes = {
  data: PropTypes.object.isRequired,
  database: PropTypes.array.isRequired,
};

export default Destination;
