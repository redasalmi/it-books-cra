import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

const LoadingBook = () => {
    return (
        <div className="text-center">
            <h4>
                Loading Book
            </h4>
            <BeatLoader
                sizeUnit={"px"}
                size={50}
                color={'#36D7B7'}
                loading={true}
            />
        </div>
    )
}

export default LoadingBook;