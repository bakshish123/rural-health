import React from 'react'
import Card4 from './Card4'

const CardList3 = () => {
    const cardsData = [
      { link:'Book Now >',
        description: 'GYNAECOLOGY',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzneUGdvJkm1mpEe-RyZwDkccd3iw_Eny5WI0hKyV59lOrCT5rVprsmGaBOYQ-kQvXcE&usqp=CAU',
      },
      { link:'Book Now >',
        description: 'GENERAL PHYSICIAN',
        imageUrl: 'https://i.pinimg.com/736x/7c/46/d1/7c46d10a7ddd73cd773c44531ccc43a5.jpg',
      },
      { link:'Book Now >',
        description: 'DERMATOLOGY',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRCgvgB1bB92n4IyFYYRr4ANODi7_mmvl-iaie2kSkrM2FVJTsTGCQUvTxwd9gOc67jI&usqp=CAU',
      },
      { link:'Book Now >',
        description: 'STOMACH & DIGESTION',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/10/18/22/48/pie-chart-6722292_1280.png',
      },
      { link:'Book Now >',
        description: 'PSYCHIATRY',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgW5xL_C1ggme9w2IKVUF98mfx710PmxFeHQuTG75cM8ERBqO7Qw1TXwgE_mmbbmYqkE&usqp=CAU',
      },
      { link:'Book Now >',
        description: 'PEDIATRICS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUL2aD3j3SStUZRhW4lMLWIER4tT4Lg6IN7rpNsRf02gI3yn52MQHUlbbVIH-gMd8jag&usqp=CAU',
      },
      { link:'Book Now >',
        description: 'CARDIOLOGIST',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/10/18/22/48/pie-chart-6722292_1280.png',
      },
      { link:'Book Now >',
        description: 'NEUROLOGY',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgW5xL_C1ggme9w2IKVUF98mfx710PmxFeHQuTG75cM8ERBqO7Qw1TXwgE_mmbbmYqkE&usqp=CAU',
      },
      { link:'Book Now >',
        description: 'OPHTHALMOLOGY',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUL2aD3j3SStUZRhW4lMLWIER4tT4Lg6IN7rpNsRf02gI3yn52MQHUlbbVIH-gMd8jag&usqp=CAU',
      },
    ];
  
    return (
      <div className="flex flex-row flex-wrap ml-8">
        {cardsData.map((card, index) => (
          <Card4 key={index} {...card} />
        ))}
      </div>
    );
  };
  export default CardList3;