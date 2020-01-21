import React from 'react';
import ArchiveCard from './ArchiveCard';

class Archive extends React.Component {
  render() {
    const ArchiveList = [
      {
        title: 'ひまわり',
        author: 'ゴッホ',
        image: '',
        date: '',
      },
    ];

    return (
      <div>
        <h2>Archive</h2>

        <div className='card-container'>
          { ArchiveList.map((archiveItem) => {
            return (
              <ArchiveCard
                title={ archiveItem.title }
                author={ archiveItem.author }
                image={ archiveItem.image }
                date={ archiveItem.date }
              />
            );
          }) }
        </div>
      </div>
    );
  }
}

export default Archive;
