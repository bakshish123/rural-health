import React from 'react'
import Card2 from './Card2'

const CardList2 = () => {
    const cardsData = [
      { link:'All Investment Offerings >',
        title:'Our Offerings',
        description: 'Diversify your portfolio with baskets',
        imageUrl: 'https://i.pinimg.com/736x/7c/46/d1/7c46d10a7ddd73cd773c44531ccc43a5.jpg',
      },
      { link:'Explore FAQs >',
        title:'Help & Support',
        description: 'Connect to your favourite services',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgW5xL_C1ggme9w2IKVUF98mfx710PmxFeHQuTG75cM8ERBqO7Qw1TXwgE_mmbbmYqkE&usqp=CAU',
      },
      { link:'Learn More >',
        title:'Indian Stocks', 
        description: 'Stay safe with user & data security',
        imageUrl: 'https://i.pinimg.com/736x/7c/46/d1/7c46d10a7ddd73cd773c44531ccc43a5.jpg',
      },
    ];
  
    return (
      <div className="flex flex-row flex-wrap ml-8">
        {cardsData.map((card2, index) => (
          <Card2 key={index} {...card2} />
        ))}
      </div>
    );
  };
  export default CardList2;